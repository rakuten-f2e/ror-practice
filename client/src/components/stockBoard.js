import React from 'react';
import Api from '../api';
import './stockBoard.css';


export default class StockBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			stocksData : [],
			dateOptions: [],
			sidOptions: [],
			selectedDate: ' ',
			selectedStock: ' '
		}
	}
  render(){
		const stocks = this.state.stocksData.map( stock => {
			return (
				<tr key = {stock.id}>
					<td>{stock.created_at.split('T')[0]}</td>
					<td>{stock.number}</td>
					<td>{stock.stock_id}</td>
					<td>{stock.name}</td>
					<td>{stock.opening_price}</td>
					<td>{stock.highest_price}</td>
					<td>{stock.floor_price}</td>
					<td>{stock.yesterday_closing_price}</td>
					<td>{stock.today_closing_price}</td>
					<td className="volumes">{stock.volumes}</td>
					<td className={this.getFlutcuationClass(stock.fluctuation)}>{stock.fluctuation}</td>
					<td>{stock.fluctuation_rate}</td>
				</tr>
			)
		})
		const dateSelections = this.state.dateOptions.map( date => {
			return (
				<option value = {date} key = {date}>{date}</option>
			)
		})
		const sidSelections = this.state.sidOptions.map( stock => {
			return (
				<option value = {stock.stock_id} key = {stock.stock_id}>{stock.stock_id + ' ' + stock.name}</option>
			)
		})
		const headers = ['日期', '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量','漲跌', '漲跌幅']
		const tableHeader = headers.map( (header, i) => {
			return <td className="tableHeader" key={header} onClick={() => { this.onSort(i) }}>{header}</td>
		})
		return(
			<div>
				<div className="selectionArea">
					請選擇日期：
					<select onChange={this.changeDate}>
						<option value= " "> -- ALL --</option>
						{dateSelections}
					</select>
					請選擇股票：
					<select onChange={this.changeSid} >
						<option value= " " > -- ALL --</option>
						{sidSelections}
					</select>
					</div>
				<table>
					<thead>
						<tr>
							{tableHeader}
						</tr>
					</thead>
					<tbody>
						{stocks}
					</tbody>
				</table>
			</div>
		)
	
	}
	componentDidMount(){
		this.getTodayStocks()
		this.getDateOptions()
		this.getSidOptions()
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state.selectedDate !== prevState.selectedDate || this.state.selectedSid !== prevState.selectedSid){
			const stockId = this.state.selectedSid === ' ' ? null : this.state.selectedSid
			const date = this.state.selectedDate === ' ' ? null : this.state.selectedDate
			
			this.searchStocks(stockId, date)
		}
	}
	getTodayStocks() {
		Api.get('/stocks')
			.then(res => {
				this.setState({ stocksData : JSON.parse(JSON.stringify(res.data)) })
			})
			.catch(err => {
				console.log(err)
			})
	}
	getDateOptions() {
		Api.get('/stocks/date')
			.then(res => {
				this.setState({ dateOptions : [...res.data] })
			})
			.catch(err => {
				console.log(err)
			})
	}
	getSidOptions() {
		Api.get('/stocks/stock')
			.then(res => {
				this.setState({ sidOptions : [...res.data] })
			})
			.catch(err => {
				console.log(err)
			})
	}
	searchStocks(sid, date) {
		Api.get('/stocks', {
				params: {
					id:  sid,
					date: date
				}
			})
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
		this.setState({selectedSid: e.target.value})
	}
	onSort = (i) => {
		const data = this.state.stocksData
		const keys = ['created_at','number', 'stock_id', 'name', 'opening_price', 'highest_price', 'floor_price', 'yesterday_closing_price', 'today_closing_price', 'volumes', 'fluctuation', 'fluctuation_rate']
		data.sort((a,b) => {
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
		this.setState({stocksData: data})
	}
	getFlutcuationClass = (data) => {
		const prefix = data[0]
		if (prefix === '▲') return 'positive'
		if (prefix === '▼') return 'negative'
	}
}

