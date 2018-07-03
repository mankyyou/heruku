class LineItem < ApplicationRecord
  belongs_to :gear, optional: true
  belongs_to :order, optional: true
  belongs_to :cart
  $total

  def total_price
    gear.price * quantity
    $total = gear.price * quantity
  end

  def self.total
    return $total
  end
end
