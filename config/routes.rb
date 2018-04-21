Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  
  namespace :public do
    resources :companies, only: [:index] do
      get :search, on: :collection
      get :locations, on: :collection
    end
  end

  resources :companies do
    resources :employees
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#home'
  
end
