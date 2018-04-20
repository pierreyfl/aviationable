module Public
    class CompaniesController < ActionController::Base
        #this controller is going to be used for those routes that don't need authentication
        def index
            @companies = Company.all
            render json: @companies, status: 200
        end

        def search


            @companies = Company.all
        
            # @companies = (params[:query] == '') ? Company.all :  @companies.search(params[:query]) if (params[:query])
            @companies = @companies.where('name ILIKE ?', "%#{params[:query]}%" ) if (params[:query])
            filter = params[:filters]
            if filter.present?
                @companies = @companies.where("revenue >= ?", filter[:min_revenue]) if filter[:min_revenue] != ''
                @companies = @companies.where("revenue <= ?", filter[:max_revenue]) if filter[:max_revenue] != ''
                @companies = @companies.where("age >= ?", filter[:min_age]) if filter[:min_age] != ''
                @companies = @companies.where("age <= ?", filter[:max_age]) if filter[:max_age] != ''
                @companies = @companies.where("total_funding >= ?", filter[:min_total_funding]) if filter[:min_total_funding] != ''
                @companies = @companies.where("total_funding <= ?", filter[:max_total_funding]) if filter[:max_total_funding] != ''
                @companies = @companies.where("employees_count >= ?", filter[:min_employees]) if filter[:min_employees] != ''
                @companies = @companies.where("employees_count <= ?", filter[:max_employees]) if filter[:max_employees] != ''
            end

            render json: @companies, status: 200
            # if request.xhr?
            #       render :json => @companies.to_json
            #   else
            #       render :index
            #   end
        end
    end
end