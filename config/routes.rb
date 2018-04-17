Rails.application.routes.draw do
  devise_for :users
  resources :companies do
    resources :employees
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/search', to: 'companies#search', as: 'search'
  root 'main#home'
  
end
