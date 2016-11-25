class Api::ArtistsController < ApplicationController
  def new
  end

  def index
    
    @artists = Artist.order("RANDOM()").limit(12)
    render "api/artists/sample"
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

  def search
    if params[:query].present?
      @artists = Artist.where("lower(name) ~ ?", params[:query].downcase)
    else
      @artists = Artist.none
    end
    render "api/artists/search"

  end

  def show
    @artist = Artist.find(params[:id])
    render "api/artists/show"
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update_attributes(artist_params)
    render "api/artists/show"
  end


  private
  def artist_params
    params.require(:artist).permit(:username, :password,
                                  :bio, :image_url, :name)
  end
end
