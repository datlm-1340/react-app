Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :admin do
    resources :categories
    resources :posts
  end

  namespace :user, path: "" do
    resources :posts
  end
end
