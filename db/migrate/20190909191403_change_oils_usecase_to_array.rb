class ChangeOilsUsecaseToArray < ActiveRecord::Migration[5.1]
  def change
    remove_column :oils, :use_case
    add_column :oils, :use_cases, :text, array: true, default: []
  end
end
