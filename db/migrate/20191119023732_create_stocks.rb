class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :number
      t.integer :stock_id
      t.string :name
      t.float :opening_price
      t.float :highest_price
      t.float :floor_price
      t.float :yesterday_closing_price
      t.float :today_closing_price
      t.integer :volumes
      t.float :fluctuation
      t.float :fluctuation_rate
      
      t.timestamps
    end
  end
end
