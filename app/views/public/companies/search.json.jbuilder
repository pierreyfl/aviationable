json.array! @companies do |company|
    json.call(company, :id, :name, :linkedin_url, :twitter_url, :youtube_url, 
        :facebook_url, :instagram_url, :revenue, :address, :address_2, :address_3,
        :city, :state, :zip, :country, :total_funding, :age, :employees_count, :sector)
    json.banner_url company.banner.url(:medium) if company.banner.file?
end