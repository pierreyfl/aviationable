class CompanyView < ApplicationRecord
    self.table_name = 'companies_view'
    belongs_to :company, class_name: 'Company', foreign_key: :id

    scope :by_name, ->(name) {
        where("name ilike ?", "#{name}%") if name.present?
    }

    scope :by_sector, ->(sector) {
        where("sector ilike ?", "#{sector}%") if sector.present?
    }

    scope :by_location, ->(location) {
        where("location ilike ?", "#{location}%") if location.present?
    }

    def banner
        self.company.banner
    end
end