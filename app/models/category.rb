class Category < ApplicationRecord

  has_many :questions
  
  validates :category_id, :name, :category_image, presence: true
  
  attachment :category_image
end
