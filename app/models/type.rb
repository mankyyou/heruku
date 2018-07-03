class Type < ApplicationRecord
  has_many :gears
  validates :typename, presence: true, length: {minimum: 5, maximum: 30}
end
