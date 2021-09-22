require_relative '../level/calc_user_level.rb'#レベルアップ処理

class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user, only: [:edit, :update, :destroy]

  def show
    @user = current_user
    @like_questions = @user.like_questions
    @questions = Question.find(params[:id])
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
      user = current_user
      experience_point = params[:user][:experience_point].to_i
      current_user.increment!(:experience_point, experience_point)
      # puts "#{user.level}レベルアップ処理前のレベル"
      CalcUserLevel.calc_user_level(user, experience_point)
      # puts "#{user.level}レベルアップ処理後のレベル"
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
    params.require(:user).permit(:name, :profile_image, :is_active, :level, :experience_point, :point)
  end
  
  # before_action
  def correct_user
    user = User.find(params[:id])
    redirect_to root_url if current_user != user
  end
end
