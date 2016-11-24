class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?
  def current_user
    #current_user can be nil or a user
    @current_user ||= Artist.find_by_session_token(session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def logout
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def logged_in?
     !!current_user
  end


  private
  def require_user
    redirect_to new_session_url unless logged_in?
  end

end
