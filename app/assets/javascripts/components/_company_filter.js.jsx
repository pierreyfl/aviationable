var CompanyFilter = createReactClass({
  getInitialState: function() {
    return {
        min_revenue: '',
        max_revenue: '',
        min_total_funding: '',
        max_total_funding: '',
        min_age: '',
        max_age: '',
        min_employees: '',
        max_employees: ''
    };
  },
  handleMinRevenue: function(event) {
    this.setState({
      min_revenue: event.target.value
    });
  },
    onChange: function(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    },
  handleMaxRevenue: function(event) {
    this.setState({
      max_revenue: event.target.value
    });
  },

    handleMaxTotalFunding: function(event) {
        this.setState({
            max_total_funding: event.target.value
        });
    },

    handleMinTotalFunding: function(event) {
        this.setState({
            min_total_funding: event.target.value
        });

    },

    reload: function () {
        this.props.filterCompanies(this.state);
    },

  render: function() {
    return (
      <div className="companies-filter">
        <div className="row">
          <div className="col-md-6">Estimated Employees

              <input
                  value={this.state.min_employees}
                  placeholder="minimum"
                  name="min_employees"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
              <input
                  value={this.state.max_employees}
                  placeholder="maximum"
                  name="max_employees"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
          </div>

          <div className="col-md-6">
            Estimated Revenue
            <input
              value={this.state.min_revenue}
              placeholder="minimum"
              name="min_revenue"
              onChange={this.onChange}
              onBlur={this.reload}
            />
            <input
              value={this.state.max_revenue}
              placeholder="maximum"
              name="max_revenue"
              onChange={this.onChange}
              onBlur={this.reload}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">Total Funding
              <input
                  value={this.state.min_total_funding}
                  placeholder="minimum"
                  name="min_total_funding"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
              <input
                  value={this.state.max_total_funding}
                  placeholder="maximum"
                  name="max_total_funding"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
          </div>
          <div className="col-md-6">Company Age
              <input
                  value={this.state.min_age}
                  placeholder="minimum"
                  name="min_age"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
              <input
                  value={this.state.max_age}
                  placeholder="maximum"
                  name="max_age"
                  onChange={this.onChange}
                  onBlur={this.reload}
              />
          </div>
        </div>
      </div>
    );
  }
});
