class CreateOils < ActiveRecord::Migration[5.1]
  def change
    create_table :oils do |t|
      t.string :name
      t.string :use_case
      t.integer :type

      t.timestamps
    end
  end
end
