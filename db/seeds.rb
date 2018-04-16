# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Company.delete_all

100.times do

  company = Company.create(
      name: Faker::Company.name,
      age: Faker::Number.number(2),
      revenue: Faker::Number.number(4),
      total_funding: Faker::Number.number(6),
      address: Faker::Address.street_address,
      city: Faker::Address.city,
      state: Faker::Address.state,
      zip: Faker::Address.zip,
      country: Faker::Address.country
  )
  if company.id
    puts "Created company #{company.name}"
  end
end