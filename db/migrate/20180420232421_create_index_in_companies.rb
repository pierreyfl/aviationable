class CreateIndexInCompanies < ActiveRecord::Migration[5.1]
  def up
    add_index :companies, [:city, :state, :country], name: 'city_state_country_idx'
  end

  def down
    remove_index :companies, name: 'city_state_country_idx'
  end
end
