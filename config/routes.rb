Rails.application.routes.draw do
  get 'app', to: 'app#index'
  devise_for :users
  resources :notes
end
