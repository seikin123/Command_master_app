class Admin::QuestionsController < ApplicationController
  before_action :authenticate_admin!
  
  def index
    @questions = Question.all
  end

end
