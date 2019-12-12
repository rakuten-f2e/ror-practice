import { connect } from 'react-redux'
import { sortStocksData } from '../actions/stocksData'
import TableHeader from '../components/stockBoard/tableHeader'

const mapStateToProps = state => ({
  options: state.stockOption
})

const mapDispatchToProps = dispatch => ({
  onClick: i => dispatch(sortStocksData(i))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableHeader)
