require 'test_helper'

class ProducttypeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get producttype_show_url
    assert_response :success
  end

end
