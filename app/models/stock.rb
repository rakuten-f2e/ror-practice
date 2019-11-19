class Stock < ActiveRecord::Base
  attr_accessible :floor_price, :highest_price, :id, :name, :opening_price, :today_closing_price, :volumes, :yesterday_closing_price

  def self.get_all_stocks
    Stock.all
  end

  def self.sort_stocks(col)
    Stock.order(col.to_sym)
  end
end
