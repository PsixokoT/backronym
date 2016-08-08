require 'test_helper'

class AbbreviationControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get abbreviation_search_url
    assert_response :success
  end

end
