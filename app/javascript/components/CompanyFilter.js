import React from "react";

export default class CompanyFilter extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.reload = this.reload.bind(this);
  }

  state = {
    min_revenue: "",
    max_revenue: "",
    min_total_funding: "",
    max_total_funding: "",
    min_age: "",
    max_age: "",
    min_employees: "",
    max_employees: ""
  };

  componentDidMount() {
    $(".companies-filter #revenue").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 10000,
      grid: true,
      force_edges: true,
      onFinish: data => {
        this.setState({
          min_revenue: data.from,
          max_revenue: data.to
        });
        this.reload();
      }
    });

    $(".companies-filter #age").ionRangeSlider({
      type: "double",
      min: 0,
      max: 100,
      grid: true,
      force_edges: true,
      onFinish: data => {
        this.setState({
          min_age: data.from,
          max_age: data.to
        });
        this.reload();
      }
    });

    $(".companies-filter #employees").ionRangeSlider({
      type: "double",
      min: 1,
      max: 100,
      grid: true,
      force_edges: true,
      onFinish: data => {
        this.setState({
          min_employees: data.from,
          max_employees: data.to
        });
        this.reload();
      }
    });

    $(".companies-filter #total_fund").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000000,
      grid: true,
      force_edges: true,
      onFinish: data => {
        this.setState({
          min_total_funding: data.from,
          max_total_funding: data.to
        });
        this.reload();
      }
    });
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  reload() {
    this.props.filterCompanies(this.state);
  }

  render() {
    return (
      <div className="companies-filter">
        <div className="row">
          <div className="col-md-6">
            <label>Estimated Employees</label>

            <input
              value={this.state.min_employees}
              placeholder="minimum"
              id="employees"
            />
          </div>

          <div className="col-md-6">
            <label>Estimated Revenue</label>
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
            <label>Company Age</label>
            <input value={this.state.min_age} placeholder="minimum" id="age" />
          </div>
        </div>
      </div>
    );
  }
}
