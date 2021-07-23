Rails.application.routes.draw do
devise_for :users, controllers: {
sessions:      'users/sessions',
passwords:     'users/passwords',
registrations: 'users/registrations'
}

  resources :users do
    collection do #idは付与しない
      get 'unsubscribe' #退会画面
      patch 'withdraw' #is_aciveを更新する
    end
  end
  resources :categories
  resources :commands
  resources :questions
  
  resources :likes, only: [:create]
  # post   '/like/:story_id' => 'likes#like',   as: 'like'
  


root to: "homes#top"
get 'about' => 'homes#about'

  root to: "homes#top"
  get 'about' => 'homes#about'
  
  #お問い合わせ機能のルーティング
  get   'inquiry'         => 'inquiry#index'     # 入力画面
  post  'inquiry/confirm' => 'inquiry#confirm'   # 確認画面
  post  'inquiry/thanks'  => 'inquiry#thanks'    # 送信完了画面
  

  
  devise_for :admins, controllers: {
    sessions: 'admins/sessions'
  }
  
  namespace :admin do
    resources :categories, only: [:index, :edit, :create, :update]
  end
    

  
end
