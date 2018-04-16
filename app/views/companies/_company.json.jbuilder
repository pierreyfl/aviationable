json.extract! company, :id, :name, :revenue, :employees_count, :total_funding, :country, :created_at, :updated_at
json.url company_url(company, format: :json)
