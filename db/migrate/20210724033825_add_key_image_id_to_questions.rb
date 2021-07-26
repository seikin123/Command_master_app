class AddKeyImageIdToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :problem_image_id, :string
  end
end
