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
    if params[:song][:title].empty?
      badSong = Song.new(title: params[:song][:title], song_url: 'abc', artist_id: 999)
      badSong.save
      render json: badSong.errors.full_messages, status: 422
    elsif params[:song][:song_url].empty? && params[:song][:title]
      @song.update(title: params[:song][:title])
      render "api/songs/show"
    elsif @song.update_attributes(song_params)
      render "api/songs/show"
    end
  end

  def destroy
    @song = Song.find(params[:id])
    if @song.destroy
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :artist_id, :song_url)
  end
end
