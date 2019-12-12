import { connect } from 'react-redux'
import { changeDate } from '../actions/selectedDate'
import { searchStocksByIdOrDate } from '../actions/stocksData';
import DropdownSelect from '../components/stockBoard/dropdownSelect'

const mapStateToProps = state => ({
  options: state.dateOption
})

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(changeDate(e))
    dispatch(searchStocksByIdOrDate())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSelect)
