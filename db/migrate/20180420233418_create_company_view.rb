class CreateCompanyView < ActiveRecord::Migration[5.1]
  def up
    execute("
      CREATE VIEW companies_view AS (
      SELECT *, concat_ws(', ', city, state, country) as location from companies
      );
      ")
  end

  def down
    execute("DROP VIEW companies_view;")
  end
end
