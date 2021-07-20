
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  attachment :profile_image
  #バリデーション
  validates :name, presence: true, length: {maximum: 20, minimum: 2}, uniqueness: true
  
  #いいね機能
  has_many :likes, dependent: :destroy
  has_many :like_questions, through: :likes, source: :question
  

  # 退会メソッド trueならfalseを返すようにしている
  def active_for_authentication?
    super && (self.is_active == true)
  end
  
  
  has_many :answers
  
end
