import React from 'react';
import DateSelection from '../../containers/dateSelection'
import StockSelection from '../../containers/stockSelection'
import StockTable from '../../containers/stockTable'
import TableHeader from '../../containers/tableHeader'
class StockBoard extends React.Component {
	componentDidMount(){
		this.initData()
	}

	initData() {
		const { getStocksData, getDateOption, getStockOption } = this.props

		getStocksData()
		getDateOption()
		getStockOption()
	}


	render() {
		return(
			<div>
				<div className="selectionArea">
					請選擇日期：
					<DateSelection />
					請選擇股票：
					<StockSelection />
				</div>
				<table>
					<TableHeader />
					<StockTable />
				</table>
			</div>
		)
	}
}

export default StockBoard