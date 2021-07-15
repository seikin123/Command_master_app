class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :category_id
      t.integer :drill_id
      t.integer :user_id
      t.string :problem
      t.string :answer_key
      t.integer :type

      t.timestamps
    end
  end
end
