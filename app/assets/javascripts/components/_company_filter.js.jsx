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

    onChange: function(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    },

    componentDidMount: function () {
      var vm = this;
        $(".companies-filter #revenue").ionRangeSlider({
            type: "double",
            min: 1000,
            max: 10000,
            grid: true,
            force_edges: true,
            onFinish: function (data) {
                vm.setState({
                    min_revenue: data.from,
                    max_revenue: data.to
                });
                vm.reload();
            }
        });

        $(".companies-filter #age").ionRangeSlider({
            type: "double",
            min: 0,
            max: 100,
            grid: true,
            force_edges: true,
            onFinish: function (data) {
                vm.setState({
                    min_age: data.from,
                    max_age: data.to
                });
                vm.reload();
            }
        });

        $(".companies-filter #employees").ionRangeSlider({
            type: "double",
            min: 1,
            max: 100,
            grid: true,
            force_edges: true,
            onFinish: function (data) {
                vm.setState({
                    min_employees: data.from,
                    max_employees: data.to
                });
                vm.reload();
            }
        });

        $(".companies-filter #total_fund").ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000000,
            grid: true,
            force_edges: true,
            onFinish: function (data) {
                vm.setState({
                    min_total_funding: data.from,
                    max_total_funding: data.to
                });
                vm.reload();
            }
        });
    },
    reload: function () {
        this.props.filterCompanies(this.state);
    },

  render: function() {
    return (
      <div className="companies-filter">
        <div className="row">
          <div className="col-md-6">
              <label >
                  Estimated Employees
              </label>


              <input
                  value={this.state.min_employees}
                  placeholder="minimum"
                  id="employees"
              />

          </div>

          <div className="col-md-6">
              <label>
                  Estimated Revenue

              </label>
            <input
              value={this.state.min_revenue}
              placeholder="minimum"
              id="revenue"
            />

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <label> Total Funding</label>

              <input
                  value={this.state.min_total_funding}
                  placeholder="minimum"
                  id="total_fund"

              />

          </div>
          <div className="col-md-6">
              <label>
                  Company Age

              </label>
              <input
                  value={this.state.min_age}
                  placeholder="minimum"
                  id="age"

              />

          </div>
        </div>
      </div>
    );
  }
});
