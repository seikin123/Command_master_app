class UsersController < ApplicationController
  
  def index
  end

  def show
    @user = current_user
  end

  def edit
    @user = User.find(params[:id])
  end
  
  
  
 private
  def user_params
    params.require(:user).permit(:name, :profile_image, :is_active, :level, :experience_point)
  end
end
