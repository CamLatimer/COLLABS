class ArtistsController < ApplicationController
  def index
    @artists = Artist.includes(:affiliates).all


    # @artists.each do |artist|
    #   artist["affiliates"] = []
    #   artist["affiliates"] << artist.affiliates
    # end

    render :json => @artists
  end
end
