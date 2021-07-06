class UsersController < ApplicationController
  
  def index
  end

  def show
    @user = current_user
  end

  def edit
    @user = User.find(params[:id])
  end
  
  def updated
    @user = User.find(params[:id])
    if @user.update(user_params)
    redirect_to user_path(@user.id),notice: 'successfully updated!'
    else
      render :edit
    end
  end
  
 private
  def user_params
    params.require(:user).permit(:name, :profile_image, :is_active, :level, :experience_point)
  end
end
