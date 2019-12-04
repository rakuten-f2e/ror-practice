import React from 'react';
import { getTodayStocks, getDateOptions, getSidOptions, getStockByIdOrDate } from '../../api';
import StockTable from './stockTable/'
import TableHeader from './tableHeader/'
import DropdownSelect from './dropdownSelect/'

const HEADING = [
	'created_at', 
	'number', 
	'stock_id', 
	'name', 
	'opening_price', 
	'highest_price', 
	'floor_price', 
	'yesterday_closing_price', 
	'today_closing_price', 
	'volumes', 
	'fluctuation', 
	'fluctuation_rate'
]

export default class StockBoard extends React.Component {
	state = {
		stocksData : [],
		dateOptions: [],
		sidOptions: [],
		selectedDate: null,
		selectedStock: null
	}
	
	componentDidMount(){
		this.initData()
	}

	componentDidUpdate(prevProps, prevState){
		const { selectedDate, selectedStock} = this.state

		if(selectedDate !== prevState.selectedDate || selectedStock !== prevState.selectedStock){
			const stockId = selectedStock === 'all' ? null : selectedStock
			const date = selectedDate === 'all' ? null : selectedDate
			
			getStockByIdOrDate(stockId, date)
			.then(res => {
				this.setState({ stocksData : JSON.parse(JSON.stringify(res.data)) })
			})
			.catch(err => {
				console.log(err)
			})
		}
	}

	initData() {
		getTodayStocks()
			.then(res => {
				this.setState({ stocksData : JSON.parse(JSON.stringify(res.data)) })
			})
			.catch(err => {
				console.log(err)
			})

		getDateOptions()
			.then(res => {
				this.setState({ dateOptions : [...res.data] })
			})
			.catch(err => {
				console.log(err)
			})

		getSidOptions()
			.then(res => {
				this.setState({ sidOptions : [...res.data] })
			})
			.catch(err => {
				console.log(err)
			})
	}

	changeDate = (e) => {
		this.setState({selectedDate: e.target.value})
	}

	changeSid = (e) => {
		this.setState({selectedStock: e.target.value})
	}

	onSort = (i) => {
		const { stocksData } = this.state
		const condition = HEADING[i]

		stocksData.sort((a,b) => {
			if ( i === 3) return a[condition].localeCompare(b[condition])
			return a[condition] <=  b[condition] ? 1 : -1
		}) 
		this.setState({stocksData: stocksData})
	}

	render() {
		const { stocksData, dateOptions, sidOptions } = this.state

		return(
			<div>
				<div className="selectionArea">
					請選擇日期：
					<DropdownSelect options={dateOptions} onChange={this.changeDate} />
					請選擇股票：
					<DropdownSelect options={sidOptions} onChange={this.changeSid} />
				</div>
				<table>
					<TableHeader onClick={this.onSort} />
					<StockTable stocksData={stocksData} />
				</table>
			</div>
		)
	}
}

