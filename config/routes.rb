Rails.application.routes.draw do
  get 'abbreviation/search'

  root 'welcome#index'
  post '/upload', to: 'book#upload'
  get  '/search', to: 'abbreviation#search'
  get  '/jobs',   to: 'book#jobs'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
