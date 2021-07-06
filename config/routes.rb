Rails.application.routes.draw do
devise_for :users, controllers: {
sessions:      'users/sessions',
passwords:     'users/passwords',
registrations: 'users/registrations'
}

root to: "homes#top"
get 'about' => 'homes#about'

resources :user, only: [:edit, :update, :show] do
  collection do #idは付与しない
    get 'unsubscribe' #退会画面
    patch 'withdraw' #is_asciveを更新する
  end
end


  
end
