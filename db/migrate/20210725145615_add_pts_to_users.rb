class AddPtsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :pts, :integer, default: 0
  end
end
