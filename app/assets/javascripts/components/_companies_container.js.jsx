var CompaniesContainer = createReactClass({
	componentWillMount(){
		this.fetchCompanies();
	},

	fetchCompanies() {

		$.ajax({
	      url: this.props.companiesPath,
	      
	      dataType: 'json',
	      
	      success: function(data) {
	        this.setState({companies: data});
	      }.bind(this),

	      error: function(data) {
	      	this.setState({companies: []});
	      }.bind(this)
	    });
	},

	searchCompanies(event) {
		if (event.target.value) {
			$.ajax({
		      url: this.props.searchPath+"?query="+event.target.value,
		      
		      dataType: 'json',
		      
		      success: function(data) {
		        this.setState({companies: data});
		      }.bind(this),

		      error: function(data) {
		      	this.setState({companies: []});
		      }.bind(this)
		    });
		}
		else{
			this.fetchCompanies();
		}

	},
	
	getInitialState() {
		return { companies: [] };
	},

	render() {
		
		return (
			<div>
				<CompaniesSearch searchPath={this.props.searchPath} submitPath={this.searchCompanies} cancelPath={this.fetchCompanies}/>
			</div>
			);

	}
});