RorPractice::Application.routes.draw do
  resources :stocks do
    collection do
      get :sort
    end
  end

end
