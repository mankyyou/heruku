class StoreController < ApplicationController
  include CurrentCart
  before_action :set_cart

  def index
    @date1 = DateTime.now
    # @date2 = DateTime.new(2018, 06, 24)
    # @date3 = (@date1 - @date2).to_i
    # @date3 = @date2.strftime("%m/%d/%Y")
    @types = Type.all
    @brands = Brand.all
    if params[:query].present?
      @gears = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 6).order(created_at: :desc)
    else
      @gears = Gear.all.paginate(page: params[:page], per_page: 6).order(created_at: :desc)
    end
  end
end
