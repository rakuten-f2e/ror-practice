class StocksController < ApplicationController
	def index
		Stock.crawl_stocks
		if params[:id] 
			@stocks = Stock.get_stock_by_id(params[:id])
		else
			@stocks = Stock.get_all_stocks
		end
		render json: @stocks
	end

	def sort
		@sorted_stocks = Stock.sort_stocks(params[:col])
		render json: @sorted_stocks 
	end

end
