import React from 'react';
import PropTypes from 'prop-types'

const StockTable = ({ stocksData }) => {
	const getFlutcuationClass = (data) => {
		if ( data < 0 ) return 'negative'
		if ( data > 0 ) return 'positive'
	}

	const getFluctuationText = (text) => {
		if ( text < 0 ) return '▼ ' + Math.abs(text)
		if ( text > 0 ) return '▲ ' + text
		return '-- ' + text
	}

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
						<td className={getFlutcuationClass(stock.fluctuation)}>
							{getFluctuationText(stock.fluctuation)}
						</td>
						<td>{stock.fluctuation_rate + ' %'}</td>
					</tr>
				))
			}
		</tbody>
	)
}

StockTable.propTypes = {
	stocksData: PropTypes.array.isRequired
}

export default StockTable