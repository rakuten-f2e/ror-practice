# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# fake data
Stock.create(id: 3367, name: "aa", opening_price:"398", highest_price: "500", floor_price: "300", yesterday_closing_price: "411", today_closing_price:"400", volumes: 100, flunctuation: '2.3', flunctuation_rate: "1%")
Stock.create(id: 3368, name: "bb", opening_price:"498", highest_price: "600", floor_price: "400", yesterday_closing_price: "455", today_closing_price:"600", volumes: 700, flunctuation: '4.3', flunctuation_rate: "4%")
Stock.create(id: 3300, name: "cc", opening_price:"388", highest_price: "510", floor_price: "350", yesterday_closing_price: "471", today_closing_price:"390", volumes: 170, flunctuation: '2.6', flunctuation_rate: "2%")
Stock.create(id: 3333, name: "ddd", opening_price:"408", highest_price: "800", floor_price: "460", yesterday_closing_price: "405", today_closing_price:"590", volumes: 780, flunctuation: '3.3', flunctuation_rate: "5%")