class AddDisplayKeyToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :display_key, :string
  end
end
