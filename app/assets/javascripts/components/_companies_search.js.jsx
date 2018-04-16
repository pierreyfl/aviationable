var CompaniesSearch = createReactClass({
  getInitialState: function() {
      return {searchText: ''};
  },
  componentWillMount: function() {

  },

  searchCompanies: function(event){
    event.preventDefault();
    this.props.searchCompanies(this.state.searchText);
  },

  handleSearchText: function(event){
    this.setState({
      searchText: event.target.value
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form id="custom-search-input" onSubmit={this.searchCompanies}>
            <div className="input-group col-md-12">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Buscar"
                value={this.state.searchText}
                onChange={this.handleSearchText}
              />
              <span className="input-group-btn">
                <button className="btn btn-info btn-lg" type="submit">
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
