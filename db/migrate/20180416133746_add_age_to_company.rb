class AddAgeToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :age, :integer
  end
end
