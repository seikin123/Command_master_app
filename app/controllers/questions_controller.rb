class QuestionsController < ApplicationController
  before_action :authenticate_user!

  def index
      @user = current_user
      @questions_json = Question.select_pc_type(request.os)
      @pc_type = set_pc_type
      @categories = Category.all
    if params[:category_id].present?
      @category = Category.find(params[:category_id])
      # @questions_json = @category.questions.select_pc_type(request.os).order(Arel.sql('RAND()')).limit(10) #注意mysql=RAND()
      @questions_json = @category.questions.select_pc_type(request.os).order(Arel.sql('RANDOM()')).limit(10) #注意mysql=RAND()
    else
      redirect_to categories_path
    end
      @user_id = current_user
  end


end
