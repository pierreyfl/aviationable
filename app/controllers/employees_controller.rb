class EmployeesController < ApplicationController
  before_action :set_employee, only: [:show, :edit, :update, :destroy]
  layout "admin"
  

  # GET /companies
  # GET /companies.json
  def index
    @employees = Employee.all
  end

  # GET /companies/1
  # GET /companies/1.json
  def show
  end

  # GET /companies/new
  def new
    @company = Company.find(params[:company_id])    
    @employee = Employee.new(company: @company)
  end

  # GET /companies/1/edit
  def edit
    #1st you retrieve the post thanks to params[:post_id]

        @company = Company.find(params[:company_id])
        #2nd you retrieve the comment thanks to params[:id]

        @employee = @company.employees.find(params[:id])
  end

  # POST /companies
  # POST /companies.json
  def create
    @company = Company.find(params[:company_id])
    @employee = @company.employees.new(employee_params)

    respond_to do |format|
      if @employee.save
        format.html { redirect_to company_employee_path(@company, @employee), notice: 'Employee was successfully created.' }
        format.json { render :show, status: :created, location: @employee }
      else
        format.html { redirect_to new_company_employee_path(@company) }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/1
  # PATCH/PUT /companies/1.json
  def update
    @company = Company.find(params[:company_id])
    #2nd you retrieve the comment thanks to params[:id]

    @employee = @company.employees.find(params[:id])
    respond_to do |format|
      if @employee.update(employee_params)
        format.html { redirect_to company_employee_path(@company, @employee), notice: 'Employee was successfully updated.' }
        format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render edit_company_employee_path(@company, @employee)}
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/1
  # DELETE /companies/1.json
  def destroy
    @employee.destroy
    respond_to do |format|
      format.html { redirect_to companies_url, notice: 'Employee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def search
  	@employees = Employee.search(params[:query])
  	if request.xhr?
  		render :json => @employees.to_json
  	else
  		render :index
  	end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def employee_params
      params.require(:employee).permit(:first_name, :last_name, :salutation)
    end
end
