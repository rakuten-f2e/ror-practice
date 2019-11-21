class StocksController < ApplicationController
	def index
		Stock.crawl_stocks
		@stocks = Stock.get_all_stocks
		render json: @stocks
	end

	def sort
		@sorted_stocks = Stock.sort_stocks(params[:col])
		render json: @sorted_stocks 
	end

	def stock
		@stock = Stock.get_stock_by_id(params[:id])
		render json: @stock
	end
end
