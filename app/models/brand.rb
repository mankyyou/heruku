class Brand < ApplicationRecord
  has_many :gears
  validates :brandname, presence: true, length: {minimum: 5, maximum: 30}
end
