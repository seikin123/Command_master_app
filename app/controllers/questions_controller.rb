class QuestionsController < ApplicationController
  
  def index
    @questions = Question.new
    
    
  end

  def show
  end
end
