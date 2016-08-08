class WelcomeController < ApplicationController
  def index
    @books_count = Book.count
    @query       = query
    @data        = query ? Abbreviation.find_sentence(query) : []
  end

  private

  def query
    params[:q] || params[:query]
  end
end
