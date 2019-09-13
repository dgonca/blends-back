class Blend < ApplicationRecord
  has_many :blend_items, dependent: :destroy
  has_many :oils, through: :blend_items
  accepts_nested_attributes_for :oils
end
