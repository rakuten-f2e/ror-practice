import React from 'react';
import { getTodayStocks, getDateOptions, getSidOptions, getStock } from '../api';
import Stock from './_stock'
import TableHeader from './_tableHeader'
import DropdownSelect from './_dropdownSelect'

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
			
			this.searchStocks(stockId, date)
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

	searchStocks(sid, date) {
		getStock(sid, date)
			.then(res => {
				this.setState({ stocksData : JSON.parse(JSON.stringify(res.data)) })
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
		const keys = ['created_at','number', 'stock_id', 'name', 'opening_price', 'highest_price', 'floor_price', 'yesterday_closing_price', 'today_closing_price', 'volumes', 'fluctuation', 'fluctuation_rate']
		
		stocksData.sort((a,b) => {
			switch(i) {
				case 0:
					return new Date(a[keys[i]]) >= new Date(b[keys[i]]) 
				case 3:
					return a[keys[i]].localeCompare(b[keys[i]]) 
				case 10:
					return Number(a[keys[i]].split(' ')[1]) >=  Number(b[keys[i]].split(' ')[1]) ? 1 : -1
				case 11:
					return Number(a[keys[i]].split('%')[0]) <=  Number(b[keys[i]].split('%')[0]) ? 1 : -1
				default:
					return Number(a[keys[i]]) <=  Number(b[keys[i]]) ? 1 : -1
			}
			
		}) 
		this.setState({stocksData: stocksData})
	}

	render(){
		const { stocksData, dateOptions, sidOptions } = this.state

		return(
			<div>
				<div className="selectionArea">
					請選擇日期：
					<DropdownSelect options = {dateOptions} onChange = {this.changeDate} />
					請選擇股票：
					<DropdownSelect options = {sidOptions} onChange = {this.changeSid} optionKey = "stock_id"/>
				</div>
				<table>
					<TableHeader onClick = { this.onSort } />
					<Stock stocksData = {stocksData} />
				</table>
			</div>
		)

	}
}

