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
      onChange: this.onChange,
      className: "form-control input-lg"
    };

    return (
      <div className="search-container">
        <div className="col-md-12 col-lg-12 ">
          <form id="custom-search-input" onSubmit={this.searchCompanies}>
            <div className="row">
              <div className="input-group col-md-12 col-lg-12">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Search Company"
                  value={this.state.searchText}
                  onChange={this.handleSearchText}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group col-md-6 col-lg-6">
                <Autosuggest
                  suggestions={this.state.suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}
                />
              </div>
              <div className="input-group col-md-6 col-lg-6">
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
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-info btn-md"
                value="Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
