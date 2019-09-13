class Oil < ApplicationRecord
  has_many :blend_items
  has_many :blends, through: :blend_items
end
