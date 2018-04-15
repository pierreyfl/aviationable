class CreateEmployee < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string :salutation
      t.string :first_name
      t.string :last_name
      t.references :company, foreign_key: true
    end
  end
end
