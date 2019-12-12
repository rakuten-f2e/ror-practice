import { connect } from 'react-redux'
import StockTable from '../components/stockBoard/stockTable'

const mapStateToProps = state => ({
  stocksData: state.stocksData
})

export default connect(
  mapStateToProps
)(StockTable)
