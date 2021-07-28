class AddSynchroKeyToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :synchro_key, :string
  end
end
