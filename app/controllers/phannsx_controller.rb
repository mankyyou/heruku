class PhannsxController < ApplicationController
  include CurrentCart
  before_action :set_cart

  def razer
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 4)
    else
      @loai = Gear.where("brand_id= 1").paginate(page: params[:page], per_page: 4)
    end
  end

  def logitech
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 4)
    else
      @loai = Gear.where("brand_id= 2").paginate(page: params[:page], per_page: 4)
    end
  end

  def corsair
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 4)
    else
      @loai = Gear.where("brand_id= 3").paginate(page: params[:page], per_page: 4)
    end
  end
end
