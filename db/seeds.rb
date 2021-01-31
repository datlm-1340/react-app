Post.destroy_all
Category.destroy_all

10.times do
  Category.create name: Faker::Book.genre
end

50.times do
  Post.create title: Faker::Book.title,
    content: Faker::Lorem.paragraph(sentence_count: 10, supplemental: true, random_sentences_to_add: 10),
    author: Faker::Book.author,
    category_id: Category.pluck(:id).sample
end
