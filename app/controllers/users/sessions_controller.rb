# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :reject_user, only: [:create]

  def after_sign_in_path_for(resource)
    root_path
  end
  
  def guest_sign_in
    user = User.guest
    sign_in user
    redirect_to root_path, notice: 'ゲストユーザーとしてログインしました。'
  end
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  protected
  
  def reject_user
    @user = User.find_by(email: params[:user][:name].downcase) #ログイン時に入力されたemailが存在するか探す。
    if @customer
      if (@user.valid_password?(params[:user][:password]) && (@user.active_for_authentication? == true))
        # 入力されたパスワードが正しいこと 且つ　active_for_authentication?メソッドがtrueであるかどうか。
        flash[:alert] = "このアカウントは退会済みです。"
        redirect_to new_user_session_path
      end
    else
      flash[:alert] = "必須項目を入力してください"
    end
  end
end
