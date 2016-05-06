Rails.application.routes.draw do
  devise_for :users
  resources :notes

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
end
