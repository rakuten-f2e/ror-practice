import { connect } from 'react-redux'
import { getDateOptionApi } from '../actions/dateOption'
import { getStockOptionApi } from '../actions/stockOption'
import { getStocksDataApi } from '../actions/stocksData'
import StockBoard from '../components/stockBoard'

const mapDispatchToProps = dispatch => ({
  getDateOption: () => dispatch(getDateOptionApi()),
  getStockOption: () => dispatch(getStockOptionApi()),
  getStocksData: () => dispatch(getStocksDataApi()),
})

export default connect(
  null,
  mapDispatchToProps
)(StockBoard)
