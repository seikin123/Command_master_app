require_relative '../level/calcuserlevel.rb'#レベルあっぷ処理
class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def show
    @user = current_user
  end

  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
    redirect_to user_path(@user.id),notice: 'successfully updated!'
    else
      render :edit
    end
  end
  
  def withdraw
    user = current_user
    user.update(is_active: false) #is_activeをfalseへ
    reset_session #データをリセットする
    flash[:notice] = "ありがとうございました。またのご利用を心よりお待ちしております。"
    redirect_to root_path
  end
  
 private
  def user_params
    params.require(:user).permit(:name, :profile_image, :is_active, :level, :experience_point)
  end
end
