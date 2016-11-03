class Api::SessionsController < ApplicationController
  def new
  end

  def create

    @artist = Artist.find_by_credentials(
    session_params[:username], session_params[:password]
    )
    if @artist
      login(@artist)
      render "/api/artists/show"
    else
      render json: ["Invalid user/password combination"], status: 401
    end
  end

  def destroy
    @artist = current_user
    if @artist
      logout
      render "api/artists/show"
    else
      render json: ["No one signed in"], status: 404
    end
  end

  private
  def session_params
    params.require(:artist).permit(:username, :password)
  end
end
