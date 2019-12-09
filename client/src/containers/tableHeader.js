import { connect } from 'react-redux'
import { sortStocksData } from '../actions/stocksData'
import Header from '../components/stockBoard/header'

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
