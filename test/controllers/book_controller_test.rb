require 'test_helper'

class BookControllerTest < ActionDispatch::IntegrationTest
  test "should get upload" do
    get book_upload_url
    assert_response :success
  end

end
