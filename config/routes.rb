Rails.application.routes.draw do
  devise_for :users, controllers: {
  sessions:      'users/sessions',
  passwords:     'users/passwords',
  registrations: 'users/registrations'
  }
  
  root to: "homes#top"
  
  # ゲストログイン用
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
  end

  resources :users, only: [:show, :edit, :update] do
    put "update_user_point"  => "users#update_user_point"
    collection do #idは付与しない
      get :likes
      get 'unsubscribe' #退会画面
      patch 'withdraw' #is_aciveを更新する
    end
  end
  
  resources :categories
  resources :commands
  resources :questions
  
  resources :likes, only: [:create]
  
  #お問い合わせ機能のルーティング
  get   'inquiry'         => 'inquiry#index'     # 入力画面
  post  'inquiry/confirm' => 'inquiry#confirm'   # 確認画面
  post  'inquiry/thanks'  => 'inquiry#thanks'    # 送信完了画面
  
  namespace :admin do
    resources :categories, only: [:index, :edit, :create, :update]
    resources :users, only: [:index, :show, :edit, :update]
    resources :questions, only: [:index]
  end
  
  devise_for :admins, controllers: {
    sessions: 'admins/sessions'
  }
  

    

  
end
