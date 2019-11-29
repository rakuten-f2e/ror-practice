import React from 'react';

export default class Stock extends React.Component {
	getFlutcuationClass = (data) => {
		const prefix = data[0]
		if (prefix === '▲') return 'positive'
		if (prefix === '▼') return 'negative'
	}

	render(){
		const { stocksData } = this.props

		const stocks = stocksData.map( stock => {
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
		return(
			<tbody>
				{stocks}
			</tbody>
		)

	}
}

