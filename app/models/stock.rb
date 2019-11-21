require 'nokogiri'
require 'open-uri'

class Stock < ActiveRecord::Base
  attr_accessible :number, :floor_price, :highest_price, :id, :name, :opening_price, :today_closing_price, :volumes, :yesterday_closing_price, :flunctuation, :flunctuation_rate

  
  def self.crawl_stocks
    stocks_data = []
    encoded_data = open('https://stock.wearn.com/qua.asp')
    .read.force_encoding('big5') 
    .encode!('utf-8', undef: :replace, replace: '?', invalid: :replace) # encode chinese of crawl_data

    parse_data = Nokogiri::HTML(encoded_data)
    stocks_raw_data = parse_data.css('.stockalllistbg2, stockalllistbg1')

    stocks_raw_data.each do |stock|
      stocks_data.push(array_to_hash(stock.text.gsub(/\u00a0/, '').split(' ')))
    end

    Stock.delete_all
    Stock.create(stocks_data)
  end

  def self.array_to_hash(arr)
    hash_data = {
      number: arr[0], 
      id: arr[1], 
      name: arr[2], 
      opening_price: arr[3],
      highest_price: arr[4],
      floor_price: arr[5],
      yesterday_closing_price: arr[6],
      today_closing_price: arr[7],
      volumes: arr[8],
      flunctuation: arr[9] + arr[10],
      flunctuation_rate: arr[11]
    }
    hash_data.stringify_keys 
  end
  
  def self.get_all_stocks
    Stock.all
  end

  def self.sort_stocks(col)
    Stock.order(col.to_sym)
  end
end
