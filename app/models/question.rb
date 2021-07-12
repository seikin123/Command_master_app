class Question < ApplicationRecord
  # has_many :answers
  enum pc_type: { Mac: 0, Windows: 1 }

  def questions(pc_type) #osの判定
    if pc_type == 'Mac OSX'
      Question.where(pc_type: 'Mac')
    else
      Question.where(pc_type: 'Windows')
    end
  end
end
