class CommandsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @questions = Question.select_pc_type(request.os)
    # @questions = Question.all
    # @questions_json = @questions
  end
  
  def show
    @question = Question.find(params[:id])
    # byebug
    # @question_json = @question
    # @pc_type = set_pc_type
  end
end
