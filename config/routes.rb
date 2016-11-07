Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:new, :create, :update] do
      resources :songs, only: [:create, :update, :destroy]
    end
    resource :session, only: [:new, :create, :destroy]
  end
end
