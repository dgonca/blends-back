Rails.application.routes.draw do
  resources :blends
  resources :oils

  namespace :api do
    namespace :v1 do
      resources :oils
      resources :blends
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
