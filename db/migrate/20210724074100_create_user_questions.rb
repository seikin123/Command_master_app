class CreateUserQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :user_questions do |t|
      t.integer :user_id
      t.integer :question_id
      t.boolean :answered_correct, default: false
      
      t.timestamps
    end
  end
end
