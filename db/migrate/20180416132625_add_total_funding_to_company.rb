class AddTotalFundingToCompany < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :total_funding, :decimal
  end
end
