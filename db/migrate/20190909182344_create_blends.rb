class CreateBlends < ActiveRecord::Migration[5.1]
  def change
    create_table :blends do |t|
      t.string :name
      t.string :use_case

      t.timestamps
    end
  end
end
