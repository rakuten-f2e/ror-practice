import { connect } from 'react-redux'
import StockBoard from '../components/stockBoard'
import { getDateOptionApi } from '../actions/dateOption'
import { getStockOptionApi } from '../actions/stockOption'
import { getStocksDataApi } from '../actions/stocksData'

const mapStateToProps = {}

const mapDispatchToProps = dispatch => ({
  getDateOption: () => dispatch(getDateOptionApi()),
  getStockOption: () => dispatch(getStockOptionApi()),
  getStocksData: () => dispatch(getStocksDataApi()),
})

const StockBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockBoard)

export default StockBoardContainer
