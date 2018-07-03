class GearsController < ApplicationController
  before_action :authenticate_chipu!, except: [:show]
  before_action :set_gear, only: [:show, :edit, :update, :destroy]
  include CurrentCart
  before_action :set_cart

  # GET /gears
  # GET /gears.json
  def index
    if params[:query].present?
      @gears = Gear.search_name(params[:query]).paginate(page: params[:page], per_page: 2)
    else
      @gears = Gear.all.paginate(page: params[:page], per_page: 2)
    end
  end

  # GET /gears/1
  # GET /gears/1.json
  def show
  end

  # GET /gears/new
  def new
    @gear = Gear.new
    @brand = Brand.all
    @type = Type.all
  end

  # GET /gears/1/edit
  def edit
  end

  # POST /gears
  # POST /gears.json
  def create
    @gear = Gear.new(gear_params)
    @brand = Brand.all
    @type = Type.all
    respond_to do |format|
      if @gear.save
        format.html { redirect_to request.referrer }
        format.json
        format.html { redirect_to @gear, notice: "Gear was successfully created." }
        format.json { render :show, status: :created, location: @gear }
      else
        format.html { render :new }
        format.json { render json: @gear.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gears/1
  # PATCH/PUT /gears/1.json
  def update
    respond_to do |format|
      if @gear.update(gear_params)
        format.html { redirect_to @gear, notice: "Gear was successfully updated." }
        format.json { render :show, status: :ok, location: @gear }
      else
        format.html { render :edit }
        format.json { render json: @gear.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gears/1
  # DELETE /gears/1.json
  def destroy
    @gear.destroy
    respond_to do |format|
      format.html { redirect_to gears_url, notice: "Gear was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_gear
    @gear = Gear.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def gear_params
    params.require(:gear).permit(:name, :description, :image_url, :price, :inventory, :image, :brand_id, :type_id)
  end
end
