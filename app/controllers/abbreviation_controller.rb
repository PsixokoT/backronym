class AbbreviationController < ApplicationController
  def search
    render json: {query: query, data: Abbreviation.find_sentence(query)}
  end

  private

  def query
    params[:q] || params[:query]
  end
end
