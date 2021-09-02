# FactoryBot.define do
#   factory :category do
#     sequence(:category_id) { |n| "test_categories_id_#{n}" }
    
#   end
# end

FactoryBot.define do
  factory :category do
    name { 'hoge' }
    # category_image { File.open("db/fixtures/category_images/copy-1.gif") }
  end
end