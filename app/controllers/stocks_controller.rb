class StocksController < ApplicationController
	def index
		# Stock.crawl_stocks
		if params[:id] || params[:date]
			stocks = Stock.search_stocks(params[:id], params[:date])
		else
			stocks = Stock.get_today_stocks
		end
		render json: stocks
	end

	def date
		date_options = Stock.get_date_options
		render json: date_options
	end

	def stock
		sid_options = Stock.get_sid_options
		render json: sid_options
	end

end
