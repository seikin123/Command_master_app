class LikesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def create
    @question = Question.find(params[:question_id])
    @like = current_user.likes.find_by(question: @question)
    toggle
  end
  
  private

  def toggle
    if @like
      return head :unprocessable_entity unless @like.destroy
    else
      @like = current_user.likes.build(question: @question)
      return head :unprocessable_entity unless @like.save
    end
    head :ok
  end
end
