class AddPointToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :point, :integer
  end
end
