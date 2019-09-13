class CreateBlendItems < ActiveRecord::Migration[5.1]
  def change
    create_table :blend_items do |t|
      t.references :blend, foreign_key: true
      t.references :oil, foreign_key: true
      t.integer :position

      t.timestamps
    end
  end
end
