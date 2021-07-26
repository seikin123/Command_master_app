class Question < ApplicationRecord
  #カテゴリー
  belongs_to :categories
  #いいね機能
  has_many :likes, dependent: :destroy
  has_many :like_users, through: :likes, source: :user
  has_many :like_users, through: :likes, source: :user
  
  attachment :problem_image
  
  validates :category_id, presence: true
  validates :problem_image, presence: true
  validates :pc_type, presence: true
  validates :problem, length: { in: 1..75 } 
  validates :answer_key, presence: true, length: { in: 1..75}
  validates :synchro_key, presence: true, length: { in: 1..75}
  validates :display_key, presence: true, length: { in: 1..75}
  
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
  
end
