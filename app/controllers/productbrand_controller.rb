class ProductbrandController < ApplicationController
  include CurrentCart
  before_action :set_cart

  def show
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 7)
    else
      @id = params[:id]
      @gears = Gear.joins("INNER JOIN brands ON gears.brand_id=brands.id AND brands.brandname='#{@id}'").paginate(page: params[:page], per_page: 7)
    end
  end
end
