Rails.application.routes.draw do

  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :show, :index] do 
      resources :messages, only: [:index, :create]
    end 
  end 
  # For details on the DSL within this file, see http://guides.rubyonrails.org/routing.html
end
