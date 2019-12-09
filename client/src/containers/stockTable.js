import { connect } from 'react-redux'
import Stocks from '../components/stockBoard/stocks'

const mapStateToProps = state => ({
  stocksData: state.stocksData
})

const StockTable = connect(
  mapStateToProps
)(Stocks)

export default StockTable
