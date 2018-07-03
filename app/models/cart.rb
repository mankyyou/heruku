
class Cart < ApplicationRecord
  has_many :line_items, dependent: :destroy
  $total

  def add_gear(gear)
    current_item = line_items.find_by(gear_id: gear.id)
    if current_item
      current_item.quantity += 1
    else
      current_item = line_items.build(gear_id: gear.id)
    end
    current_item
  end

  def total_price
    line_items.to_a.sum { |item| item.total_price }
    $total = line_items.to_a.sum { |item| item.total_price }
  end

  def self.total
    return $total
  end
end
