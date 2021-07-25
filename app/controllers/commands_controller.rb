class CommandsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @questions = Question.select_pc_type(request.os)
    @categories = Category.all
    # @questions = Question.all
    # @questions_json = @questions
  end
  
  def show
    @questions_json = Question.select_pc_type(request.os)
    # if params[:category_id].present?
    # # @question = Question.find(params[:id])
    # @category = Category.find(params[:category_id])
    # @questions_json = @category.questions.select_pc_type(request.os)
    # # @pc_type = set_pc_type
    # else
    # @questions = Question.select_pc_type(request.os)
    # end
  end

end
