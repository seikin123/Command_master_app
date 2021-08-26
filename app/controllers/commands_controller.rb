class CommandsController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = Category.all
    @questions = Question.select_pc_type(request.os)
  end

  def show
    @questions_json = Question.find(params[:id])
    @pc_type = set_pc_type
    
  end
end
