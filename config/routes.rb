Rails.application.routes.draw do
  get 'users/index'
  get 'users/show'
  get 'users/edit'
devise_for :users, controllers: {
sessions:      'users/sessions',
passwords:     'users/passwords',
registrations: 'users/registrations'
}

root to: "homes#top"
get 'about' => 'homes#about'
  
end
