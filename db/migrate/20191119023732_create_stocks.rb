class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :number
      t.integer :id
      t.string :name
      t.string :opening_price
      t.string :highest_price
      t.string :floor_price
      t.string :yesterday_closing_price
      t.string :today_closing_price
      t.integer :volumes
      t.string :flunctuation
      t.string :flunctuation_rate

      t.timestamps
    end
  end
end
