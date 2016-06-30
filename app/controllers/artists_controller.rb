class ArtistsController < ApplicationController
  def index
    # @artists = Artist.includes(:affiliates).all
    @artists = Artist.all
    if params[:search]
       @artists = Artist.search(params[:search]).order("created_at DESC")
     else
       @artists = Artist.all.order('created_at DESC')
     end

    # @artists.each do |artist|
    #   artist["affiliates"] = []
    #   artist["affiliates"] << artist.affiliates
    # end

    render :json => @artists
  end
end
