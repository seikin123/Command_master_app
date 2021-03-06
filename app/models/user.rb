
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  attachment :profile_image
  #バリデーション
  validates :name, presence: true, length: {maximum: 20, minimum: 3}, uniqueness: true

  #いいね機能
  has_many :likes, dependent: :destroy
  has_many :like_questions, through: :likes, source: :question


  # 退会メソッド trueならfalseを返すようにしている
  def active_for_authentication?
    super && (self.is_active == true)
  end

#ゲストログイン
  def self.guest
    find_or_create_by!(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.name = "Guest"
      user.password = "Guest1"
    end
  end

end
