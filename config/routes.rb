RorPractice::Application.routes.draw do
  resources :stocks do
    collection do
      get :sort
      get :date
    end
  end

end
