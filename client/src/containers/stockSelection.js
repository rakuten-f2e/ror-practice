import { connect } from 'react-redux'
import { changeStock } from '../actions/selectedStock'
import { searchStocksByIdOrDate } from '../actions/stocksData';
import DropdownSelect from '../components/stockBoard/dropdownSelect'

const mapStateToProps = state => ({
  options: state.stockOption
})

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    dispatch(changeStock(e))
    dispatch(searchStocksByIdOrDate())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSelect)
