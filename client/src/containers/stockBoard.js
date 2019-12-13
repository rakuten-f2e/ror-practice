import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDateOption } from '../actions/dateOption'
import { getStockOption } from '../actions/stockOption'
import { getStocksData } from '../actions/stocksData'
import StockBoard from '../components/stockBoard'

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ getDateOption, getStockOption, getStocksData }, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(StockBoard)
