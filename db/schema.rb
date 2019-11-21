ActiveRecord::Schema.define(:version => 20191119023732) do

  create_table "stocks", :force => true do |t|
    t.integer  "number"
    t.string   "name"
    t.string   "opening_price"
    t.string   "highest_price"
    t.string   "floor_price"
    t.string   "yesterday_closing_price"
    t.string   "today_closing_price"
    t.integer  "volumes"
    t.string   "flunctuation"
    t.string   "flunctuation_rate"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
  end

end
