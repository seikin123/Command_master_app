class UserQuestionsController < ApplicationController
  
  def update
   if current_user.nil?
     # @user = User.find(params[:id])
    if @user.udpate(experience_point: params[:experience_point])
     redirect_to user_path(@user.id)
    end
   end
  end
  
  def user_question_params
    params.require(:user_question).permit(:user_id, :question_id, :answerd_correct)
  end
end
