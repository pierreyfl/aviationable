var CompanyFilter = createReactClass({
  getInitialState: function() {
    return {
      min_revenue: '',
      max_revenue: ''
    };
  },
  handleMinRevenue: function(event) {
    this.setState({
      min_revenue: event.target.value
    });
    this.props.filterCompanies(this.state.min_revenue, this.state.max_revenue);
  },
  handleMaxRevenue: function() {
    this.setState({
      max_revenue: event.target.value
    });
    this.props.filterCompanies(this.state.min_revenue, this.state.max_revenue);
  },
  render: function() {
    return (
      <div className="companies-filter">
        <div className="row">
          <div className="col-md-6">Estimated Employees</div>
          <div className="col-md-6">
            Estimated Revenue
            <input
              value={this.state.min_revenue}
              placeholder="minimum"
              onChange={this.handleMinRevenue}
            />
            <input
              value={this.state.max_revenue}
              placeholder="maximum"
              onChange={this.handleMaxRevenue}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">Total Funding</div>
          <div className="col-md-6">Company Age</div>
        </div>
      </div>
    );
  }
});
