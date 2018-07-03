class PhanloaiController < ApplicationController
  include CurrentCart
  before_action :set_cart

  def mouse
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 4)
    else
      @loai = Gear.where("type_id= 1").paginate(page: params[:page], per_page: 4)
    end
  end

  def keyboard
    if params[:query].present?
      @loai = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 4)
    else
      @loai = Gear.where("type_id=  2").paginate(page: params[:page], per_page: 4)
    end
  end
end
