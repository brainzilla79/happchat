# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
ChannelMembership.destroy_all
Message.destroy_all

Channel.create!(name: "General")

alex = User.create!(
  email: "alexanderhapp79@gmail.com",
  username: "brainzilla", 
  password: "123456"
)

samantha = User.create!(
  email: "ghrsak@gmail.com",
  username: "garbage",
  password: "123456"
)