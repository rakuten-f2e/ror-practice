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
					<td>{stock.volumes}</td>
					<td>{stock.flunctuation}</td>
					<td>{stock.flunctuation_rate}</td>
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
		return(
			<div>
				<div className="selectionArea">
					<select onChange={this.changeDate}>
						<option value= " "> -- 請選擇日期 --</option>
						{dateSelections}
					</select>
					<select onChange={this.changeSid} >
						<option value= " " > -- 請選擇股票 --</option>
						{sidSelections}
					</select>
					</div>
				<table>
					<thead>
						<tr>
							<td>日期</td>
							<td>排</td>
							<td>代號</td>
							<td>名稱</td>
							<td>開盤價</td>
							<td>最高價</td>
							<td>最低價</td>
							<td>昨收盤</td>
							<td>今收盤</td>
							<td>成交量</td>
							<td>漲跌</td>
							<td>漲跌幅</td>
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
}

