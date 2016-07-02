class ArtistsController < ApplicationController
  def index

    @myArtists = []

    if params[:search]
      @artists = Artist.includes(:collaborators).search(params[:search]).order("created_at DESC")
      @artists.each do |artist|
        artistObj = {}
        artistObj['info'] = artist
        artistObj['collabs'] = artist.collaborators
        @myArtists << artistObj
      end

     else
       @artists = Artist.includes(:collaborators).all.order('created_at DESC')
       @artists.each do |artist|
         artistObj = {}
         artistObj['info'] = artist
         artistObj['collabs'] = artist.collaborators
         @myArtists << artistObj
       end

     end

    render :json => @myArtists

  end
  
end
