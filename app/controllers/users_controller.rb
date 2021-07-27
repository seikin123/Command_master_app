require_relative '../level/calcuserlevel.rb'#レベルあっぷ処理

class UsersController < ApplicationController
  before_action :authenticate_user!
  # skip_before_action :verify_authenticity_token

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

  def update_user_point
    unless current_user.nil?
     if current_user.increment!(:experience_point, params[:user][:experience_point].to_i)
        user_level = CalcUserLevel.calc_user_level(user, experience_point)
      
       
     end
    end
  end

    #     now_point = User.experience_point.to_s
    #   already_point = experience_point
    #   total_point = now_point + already_point
    # if current_user.update(experience_point: total_point)

  def withdraw
    user = current_user
    user.update(is_active: false) #is_activeをfalseへ
    reset_session #データをリセットする
    flash[:notice] = "ありがとうございました。またのご利用を心よりお待ちしております。"
    redirect_to root_path
  end

 private
  def user_params
    params.require(:user).permit(:name, :profile_image, :is_active, :level, :experience_point, :point)
  end
end
