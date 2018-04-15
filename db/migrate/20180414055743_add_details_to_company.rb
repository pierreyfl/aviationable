class AddDetailsToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :linkedin_url, :string
    add_column :companies, :twitter_url, :string
    add_column :companies, :youtube_url, :string
    add_column :companies, :facebook_url, :string
    add_column :companies, :instagram_url, :string
    add_column :companies, :revenue, :integer
    add_column :companies, :address, :string
    add_column :companies, :address_2, :string
    add_column :companies, :address_3, :string
    add_column :companies, :city, :string
    add_column :companies, :state, :string
    add_column :companies, :zip, :string
    add_column :companies, :country, :string
  end
end
