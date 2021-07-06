Rails.application.routes.draw do
devise_for :users, controllers: {
sessions:      'users/sessions',
passwords:     'users/passwords',
registrations: 'users/registrations'
}

root to: "homes#top"
get 'about' => 'homes#about'

resources :users, only: [:show, :edit, :update] do
  collection do #idは付与しない
    get 'unsubscribe' #退会画面
    patch 'withdraw' #is_aciveを更新する
  end
end


  
end
