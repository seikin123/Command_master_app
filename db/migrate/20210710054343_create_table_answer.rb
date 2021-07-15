class CreateTableAnswer < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :user_id
      t.string :question_id
      t.string :answer
    end
  end
end
