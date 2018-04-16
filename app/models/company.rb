class Company < ApplicationRecord
  has_many :employees, dependent: :destroy
  searchkick word_start: [:name]
end
