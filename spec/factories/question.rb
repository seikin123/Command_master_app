FactoryBot.define do
  factory :question do
    sequence(:category_id) { |a| "test_category_id_#{a}" }
    sequence(:answer_key) { |a| "test_answer_key_#{a}" }
    sequence(:synchro_key) { |a| "test_synchro__key_#{a}" }
    sequence(:problem) { |a| "test_problem_#{a}" }
    sequence(:display_key) { |a| "test_display_key_#{a}" }
    sequence(:point) { |a| "test_point_#{a}" }
    pc_type { 0 }
    problem_image { File.open("db/fixtures/category_images/copy-1.gif") }
  end
end