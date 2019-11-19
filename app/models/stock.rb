class Stock < ActiveRecord::Base
  attr_accessible :floor_price, :highest_price, :id, :name, :opening_price, :today_closing_price, :volumes, :yesterday_closing_price
end
