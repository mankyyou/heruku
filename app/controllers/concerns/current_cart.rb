module CurrentCart
  private

  def set_cart
    @brands = Brand.all
    @types = Type.all
    @cart = Cart.find(session[:cart_id])
  rescue ActiveRecord::RecordNotFound
    @cart = Cart.create
    session[:cart_id] = @cart.id
  end
end
