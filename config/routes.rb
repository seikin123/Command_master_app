Rails.application.routes.draw do
  devise_for :users, controllers: {
  sessions:      'users/sessions',
  passwords:     'users/passwords',
  registrations: 'users/registrations'
  }

  root to: "homes#top"
  get 'about' => 'homes#about'
  
  #お問い合わせ機能のルーティング
  get   'inquiry'         => 'inquiry#index'     # 入力画面
  post  'inquiry/confirm' => 'inquiry#confirm'   # 確認画面
  post  'inquiry/thanks'  => 'inquiry#thanks'    # 送信完了画面
  
  resources :users do
    collection do #idは付与しない
      get 'unsubscribe' #退会画面
      patch 'withdraw' #is_aciveを更新する
    end
  end
  
    
    
  devise_for :admins, controllers: {
    sessions: 'admins/sessions'
  }
  
end
