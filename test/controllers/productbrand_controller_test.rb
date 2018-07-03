require 'test_helper'

class ProductbrandControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get productbrand_show_url
    assert_response :success
  end

end
