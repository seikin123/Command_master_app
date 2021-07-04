Rails.application.routes.draw do
  get 'homes/top'
  get 'homes/about'
  get 'top/about'
  devise_for :users, controllers: {
  sessions:      'users/sessions',
  passwords:     'users/passwords',
  registrations: 'users/registrations'
}
  
end
