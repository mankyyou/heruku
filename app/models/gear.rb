class Gear < ApplicationRecord
  has_attached_file :image, styles: {medium: "10000x10000>", thumb: "10000x10000>"}, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  belongs_to :brand
  belongs_to :type
  has_many :line_items
  has_many :orders, through: :line_items
  before_destroy :ensure_not_referenced_by_any_line_item
  validates :name, presence: true, length: {minimum: 5, maximum: 20}
  validates :description, presence: true, length: {minimum: 10}
  validates :image, presence: true
  validates :price, presence: true, numericality: {greater_than_or_equal_to: 1}
  validates :inventory, presence: true, numericality: {greater_than_or_equal_to: 1}
  include PgSearch
  pg_search_scope :search_name, against: [:name], using: {
                                  tsearch: {
                                    prefix: true,
                                  },
                                }

  private

  # ensure that there are no line items referencing this product
  def ensure_not_referenced_by_any_line_item
    unless line_items.empty?
      errors.add(:base, "Line Items present")
      throw :abort
    end
  end
end
