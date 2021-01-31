class Category < ApplicationRecord
  has_many :posts, dependent: :destroy, foreign_key: :category_id
end
