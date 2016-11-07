class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    if(@song.save)
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update
    @song = Song.find(params[:id])
    @song.update_attributes(song_params)
    render "api/songs/show"
  end

  private
  def song_params
    params.require(:song).permit(:title, :artist_id, :song_url)
  end
end
