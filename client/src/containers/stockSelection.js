import { connect } from 'react-redux'
import { changeStock } from '../actions/selectedStock'
import DropdownSelect from '../components/stockBoard/dropdownSelect'

const mapStateToProps = state => ({
  options: state.stockOption
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeStock(e))
})

const StockSelection = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSelect)

export default StockSelection
