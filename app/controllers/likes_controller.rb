class LikesController < ApplicationController
  
  def create
    @question = Question.find(params[:uestion_id])
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
