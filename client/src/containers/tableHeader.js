import { connect } from 'react-redux'
import Header from '../components/stockBoard/header'
import { sortStocksData } from '../actions/stocksData'

const mapStateToProps = state => ({
  options: state.stockOption
})

const mapDispatchToProps = dispatch => ({
  onClick: i => dispatch(sortStocksData(i))
})

const StockTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default StockTable
