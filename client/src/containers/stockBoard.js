import { connect } from 'react-redux'
import { getDateOption } from '../actions/dateOption'
import { getStockOption } from '../actions/stockOption'
import { getStocksData } from '../actions/stocksData'
import StockBoard from '../components/stockBoard'

const mapDispatchToProps = dispatch => ({
  getDateOption: () => dispatch(getDateOption()),
  getStockOption: () => dispatch(getStockOption()),
  getStocksData: () => dispatch(getStocksData()),
})

export default connect(
  null,
  mapDispatchToProps
)(StockBoard)
