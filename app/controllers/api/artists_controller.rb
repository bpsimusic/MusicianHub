class Api::ArtistsController < ApplicationController
  def new
  end

  def create
    @artist = Artist.new(artist_params)
    if(@artist.save)
      login(@artist)
      render "api/artists/show"
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update_attributes(artist_params)
    render "api/artists/show"
  end

  private
  def artist_params
    params.require(:artist).permit(:username, :password,
                                  :bio, :image_url)
  end
end
