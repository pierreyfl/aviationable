import React from "react";
import Autosuggest from "react-autosuggest";

export default class CompaniesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.searchCompanies = this.searchCompanies.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  state = {
    searchText: "",
    searchLocation: "",
    searchSector: "",
    suggestions: []
  };

  searchCompanies(event) {
    event.preventDefault();
    this.props.searchCompanies({
      company: this.state.searchText,
      location: this.state.searchLocation,
      sector: this.state.searchSector
    });
  }

  handleSearchText(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    fetch("/public/companies/locations?term=" + value)
      .then(response => response.json())
      .then(locations => {
        this.setState({
          suggestions: locations
        });
      })
      .catch(err => {
        console.log("Ops, error", err);
        this.onSuggestionsClearRequested();
      });
  };

  getSuggestionValue = suggestion => {
    return suggestion;
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = suggestion => suggestion;

  onChange = (event, { newValue }) => {
    this.setState({
      searchLocation: newValue
    });
  };

  render() {
    const inputProps = {
      placeholder: "Search Location",
      value: this.state.searchLocation,
      onChange: this.onChange
    };

    return (
      <div>
        <div className="col-md-6 offset-md-3">
          <form id="custom-search-input" onSubmit={this.searchCompanies}>
            <div className="input-group col-md-12">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Search Company"
                value={this.state.searchText}
                onChange={this.handleSearchText}
              />
            </div>
            <div className="input-group col-md-6">
              <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
              />
            </div>
            <div className="input-group col-md-6">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Search Sector"
                value={this.state.searchSector}
                onChange={event =>
                  this.setState({ searchSector: event.target.value })
                }
              />
            </div>
            <input
              type="submit"
              className="btn btn-info btn-lg"
              value="Search"
            />
          </form>
        </div>
      </div>
    );
  }
}

// var CompaniesSearch = createReactClass({
//   getInitialState: function() {
//     return { searchText: "", searchLocation: "", searchSector: "" };
//   },
//   componentWillMount: function() {},

//   searchCompanies: function(event) {
//     event.preventDefault();
//     this.props.searchCompanies({
//       company: this.state.searchText,
//       location: this.state.searchLocation,
//       sector: this.state.searchSector
//     });
//   },

//   handleSearchText: function(event) {
//     this.setState({
//       searchText: event.target.value
//     });
//   },

//   render: function() {
//     return (
//       <div>
//         <div className="col-md-6 offset-md-3">
//           <form id="custom-search-input" onSubmit={this.searchCompanies}>
//             <div className="input-group col-md-12">
//               <input
//                 type="text"
//                 className="form-control input-lg"
//                 placeholder="Search Company"
//                 value={this.state.searchText}
//                 onChange={this.handleSearchText}
//               />
//             </div>
//             <div className="input-group col-md-6">
//               <input
//                 type="text"
//                 className="form-control input-lg"
//                 placeholder="Search Location"
//                 value={this.state.searchLocation}
//                 onChange={event =>
//                   this.setState({ searchLocation: event.target.value })
//                 }
//               />
//             </div>
//             <div className="input-group col-md-6">
//               <input
//                 type="text"
//                 className="form-control input-lg"
//                 placeholder="Search Sector"
//                 value={this.state.searchSector}
//                 onChange={event =>
//                   this.setState({ searchSector: event.target.value })
//                 }
//               />
//             </div>
//             <input
//               type="submit"
//               className="btn btn-info btn-lg"
//               value="Search"
//             />
//           </form>
//         </div>
//       </div>
//     );
//   }
// });