Rails.application.routes.draw do
devise_for :users, controllers: {
sessions:      'users/sessions',
passwords:     'users/passwords',
registrations: 'users/registrations'
}

root to: "homes#top"
get 'about' => 'homes#about'

devise_for :admins, controllers: {
  sessions: 'admins/sessions'
}
  
end
