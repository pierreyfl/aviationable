class AddBannerToCompanies < ActiveRecord::Migration[5.1]
  def up
    add_attachment :companies, :banner
  end

  def down
    remove_attachment :companies, :banner
  end
end
