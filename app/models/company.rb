class Company < ApplicationRecord
  has_many :employees, dependent: :destroy
  # searchkick word_start: [:name]
  has_attached_file :banner, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\z/

  validates :name, presence: true, uniqueness: {case_sensitive: false}
end
