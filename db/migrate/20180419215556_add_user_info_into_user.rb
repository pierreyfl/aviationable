class AddUserInfoIntoUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string, null: false
    add_column :users, :address, :string
    add_column :users, :organization_name, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :phone, :string
  end
end
