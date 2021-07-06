class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  attachment :profile_image
  
  validates :name, :email
  
  # trueならfalseを返すようにしている
  def active_for_authentication?
    super && (self.is_active == true)
  end
end
