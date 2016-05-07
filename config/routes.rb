Rails.application.routes.draw do
  get 'app', to: 'app#index'
  devise_for :users
  resources :notes

  get "ui(/*all)" => "ui#index", as: :react_router

  root "ui#index"
end
