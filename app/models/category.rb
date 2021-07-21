class Category < ApplicationRecord

  has_many :questions
  
  attachment :category_image
  


end
