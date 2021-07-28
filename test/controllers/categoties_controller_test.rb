require 'test_helper'

class CategotiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get categoties_index_url
    assert_response :success
  end

  test "should get show" do
    get categoties_show_url
    assert_response :success
  end

end
