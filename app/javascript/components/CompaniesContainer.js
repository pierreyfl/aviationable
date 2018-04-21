import React from "react";
import CompaniesSearch from "./CompaniesSearch";
import CompanyFilter from "./CompanyFilter";
import Loading from "./Loading";
import Companies from "./Companies";

export default class CompaniesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCompanies = this.fetchCompanies.bind(this);
    this.searchCompanies = this.searchCompanies.bind(this);
    this.filterCompanies = this.filterCompanies.bind(this);
  }

  state = {
    companies: []
  };

  componentDidMount() {
    this.fetchCompanies();
  }

  fetchCompanies() {
    $.ajax({
      url: this.props.companiesPath,

      dataType: "json",

      success: data => {
        this.setState({ companies: data });
      },

      error: data => {
        this.setState({ companies: [] });
      }
    });
  }

  searchCompanies(query) {
    if (query) {
      this.setState({ loading: true, query: query });
      $.ajax({
        url: this.props.searchPath,
        dataType: "json",
        data: {
          query: query,
          filters: this.state.filters
        },
        success: data => {
          this.setState({ loading: false, companies: data });
        },
        error: data => {
          this.setState({ loading: false, companies: [] });
        }
      });
    } else {
      this.fetchCompanies();
    }
  }

  filterCompanies(filters) {
    // console.log("filter", filters, this.props.searchPath);
    if (filters) {
      this.setState({ loading: true, filters: filters });
      $.ajax({
        url: this.props.searchPath,
        dataType: "json",
        //method: 'post',
        data: {
          query: this.state.query,
          filters: filters
        },
        success: data => {
          this.setState({ loading: false, companies: data });
        },
        error: data => {
          this.setState({ loading: false, companies: [] });
        }
      });
    } else {
      this.fetchCompanies();
    }
  }

  render() {
    return (
      <div>
        <CompaniesSearch searchCompanies={this.searchCompanies} />
        <CompanyFilter filterCompanies={this.filterCompanies} />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="search-results">
            <Companies companies={this.state.companies} />
          </div>
        )}
      </div>
    );
  }
}

// var CompaniesContainer = createReactClass({
//   componentWillMount() {
//     this.fetchCompanies();
//   },

//   fetchCompanies() {
//     $.ajax({
//       url: this.props.companiesPath,

//       dataType: "json",

//       success: function(data) {
//         this.setState({ companies: data });
//       }.bind(this),

//       error: function(data) {
//         this.setState({ companies: [] });
//       }.bind(this)
//     });
//   },

//   searchCompanies(query) {
//     if (query) {
//       this.setState({ loading: true, query: query });
//       $.ajax({
//         url: this.props.searchPath,
//         dataType: "json",
//         data: {
//           query: query,
//           filters: this.state.filters
//         },
//         success: function(data) {
//           this.setState({ loading: false, companies: data });
//         }.bind(this),
//         error: function(data) {
//           this.setState({ loading: false, companies: [] });
//         }.bind(this)
//       });
//     } else {
//       this.fetchCompanies();
//     }
//   },

//   filterCompanies(filters) {
//     console.log("filter", filters, this.props.searchPath);
//     if (filters) {
//       this.setState({ loading: true, filters: filters });
//       $.ajax({
//         url: this.props.searchPath,
//         dataType: "json",
//         //method: 'post',
//         data: {
//           query: this.state.query,
//           filters: filters
//         },
//         success: function(data) {
//           this.setState({ loading: false, companies: data });
//         }.bind(this),
//         error: function(data) {
//           this.setState({ loading: false, companies: [] });
//         }.bind(this)
//       });
//     } else {
//       this.fetchCompanies();
//     }
//   },

//   getInitialState() {
//     return { companies: [] };
//   },

//   render() {
//     return (
//       <div>
//         <CompaniesSearch searchCompanies={this.searchCompanies} />
//         <CompanyFilter filterCompanies={this.filterCompanies} />
//         {this.state.loading ? (
//           <Loading />
//         ) : (
//           <div className="search-results">
//             <Companies companies={this.state.companies} />
//           </div>
//         )}
//       </div>
//     );
//   }
// });
