import React from 'react';

export default class Stock extends React.Component {
	getFlutcuationClass = (data) => {
		if ( data < 0 ) return 'negative'
		if ( data > 0 ) return 'positive'
	}

	getFluctuationText = (text) => {
		if ( text < 0 ) return '▼ ' + Math.abs(text)
		if ( text > 0 ) return '▲ ' + text
		return '-- ' + text
	}

	render(){
		const { stocksData } = this.props

		return(
			<tbody>
				{
					stocksData.map(stock => (
						<tr key={stock.id}>
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
							<td className={this.getFlutcuationClass(stock.fluctuation)}>
								{this.getFluctuationText(stock.fluctuation)}
							</td>
							<td>{stock.fluctuation_rate + ' %'}</td>
						</tr>
					))
				}
			</tbody>
		)
	}
}

