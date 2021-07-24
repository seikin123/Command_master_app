class Question < ApplicationRecord
  #カテゴリー
  belongs_to :categories
  #いいね機能
  has_many :likes, dependent: :destroy
  has_many :like_users, through: :likes, source: :user
  has_many :like_users, through: :likes, source: :user
  attachment :problem_image

  def like?(user)
    like_users.include?(user)
  end
  
  enum pc_type: { Mac: 0, Windows: 1 }

  def  self.select_pc_type(pc_type) #osの判定
    if pc_type == 'Mac OSX'
      self.where(pc_type: 'Mac')
    else
      self.where(pc_type: 'Windows')
    end
  end
  
  has_many :users, through: :user_questions
  has_many :user_questions
end
