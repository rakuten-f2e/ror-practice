require 'nokogiri'
require 'open-uri'

class Stock < ActiveRecord::Base
  attr_accessible :number, :floor_price, :highest_price, :stock_id, :name, :opening_price, :today_closing_price, :volumes, :yesterday_closing_price, :fluctuation, :fluctuation_rate

  
  def self.crawl_stocks
    stocks_data = []
    encoded_data = open('https://stock.wearn.com/qua.asp')
    .read.force_encoding('big5') 
    .encode!('utf-8', undef: :replace, replace: '?', invalid: :replace) # encode chinese of crawl_data

    parse_data = Nokogiri::HTML(encoded_data)
    stocks_raw_data = parse_data.xpath('//tr[contains(@class, "stockalllistbg2") or contains(@class, "stockalllistbg1")]')

    stocks_raw_data.each do |stock|
      stocks_data.push(array_to_hash(stock.text.gsub(/\u00a0/, '').split(' ')))
    end

    data_to_db(stocks_data)
  end

  def self.data_to_db(data)
    date = Time.now.to_date
    Stock.where(created_at:date.midnight..date.end_of_day).destroy_all
    Stock.create(data)
  end

  def self.array_to_hash(arr)
    hash_data = {
      number: arr[0], 
      stock_id: arr[1], 
      name: arr[2], 
      opening_price: arr[3],
      highest_price: arr[4],
      floor_price: arr[5],
      yesterday_closing_price: arr[6],
      today_closing_price: arr[7],
      volumes: arr[8],
      fluctuation: (arr[9] === '▼' ? '-' : '') + arr[10],
      fluctuation_rate: (arr[11].delete '%')
    }
    hash_data.stringify_keys 
  end
  
  def self.get_today_stocks
    date = Time.now.to_date
    Stock.where(created_at: date.to_date.midnight..date.to_date.end_of_day)
  end

  def self.search_stocks(sid, date)
    if not sid
      Stock.where(created_at: date.to_date.midnight..date.to_date.end_of_day)
    elsif not date
      Stock.where(stock_id: sid)
    else
      Stock.where(stock_id: sid, created_at: date.to_date.midnight..date.to_date.end_of_day)
    end
  end

  def self.get_date_options
    date_options = []
    dates = Stock.order('created_at desc').pluck('DATE(created_at)').uniq
    dates.each do |date|
      date_options.push(format_options(date, date))
    end
    date_options
  end

  def self.get_sid_options
    stock_options = []
    stocks = Stock.select('stock_id, name').order('stock_id').uniq('stock_id')
    stocks.each do |stock|
      stock_text = stock.stock_id.to_s + ' ' + stock.name
      stock_options.push(format_options(stock_text, stock.stock_id))
    end
    stock_options
  end

  def self.format_options(text, value)
    option = {
      text: text,
      value: value
    }
    option.stringify_keys
  end
end
