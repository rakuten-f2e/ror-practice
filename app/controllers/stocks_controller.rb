class StocksController < ApplicationController
    def index
        @stocks = Stock.all 
        render json: @stocks
    end

    def sort
        @sorted_stocks = Stock.order(:opening_price)
        render json: @sorted_stocks 
    end
end
