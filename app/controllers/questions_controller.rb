class QuestionsController < ApplicationController

  def index
    @questions = Question.new.questions(request.os)
    @questions_json = @questions.shuffle #ランダムに出力
    @pc_type = set_pc_type
    # index = 1
    #   Answer.where(user_id: current_user)
    # @question = Question.find(index)
  end

  def create
  #   a = Answer.new()# answer_params
  #   # Answerテーブルに答えを登録

  #   # 新しい問題を取得する
  #   index = 1
  #   if params[:answer][:id] != nil
  #     index = params[:answer][:id].to_i + 1
  #   end
  #   @question = Question.find(index)
  end

end
