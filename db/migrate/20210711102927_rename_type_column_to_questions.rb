class RenameTypeColumnToQuestions < ActiveRecord::Migration[5.2]
  def change
    rename_column :questions, :type, :pc_type
  end
end
