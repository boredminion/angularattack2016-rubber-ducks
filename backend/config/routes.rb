Rails.application.routes.draw do
  resources :bookmarks
  resources :photos
  resources :albums do
    collection do
      get 'search'
    end
  end
  # get '/albums/search', to: 'albums#search'
  resources :tags
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
