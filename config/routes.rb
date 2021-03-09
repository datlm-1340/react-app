Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :admin,  path: "admin" do
    root to: 'posts#index'
    resources :categories
    resources :posts
  end

  namespace :user, path: "" do
    root to: 'posts#index'
    resources :posts
  end
end
