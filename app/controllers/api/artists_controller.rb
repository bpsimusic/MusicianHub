class Api::ArtistsController < ApplicationController
  def new
  end

  def create
    @artist = Artist.new(artist_params)
    # debugger
    if(@artist.save)
      login(@artist)
      render "api/artists/show"
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  private
  def artist_params
    params.require(:artist).permit(:username, :password)
  end
end
