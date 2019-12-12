import { connect } from 'react-redux'
import { changeDate } from '../actions/selectedDate'
import DropdownSelect from '../components/stockBoard/dropdownSelect'

const mapStateToProps = state => ({
  options: state.dateOption
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeDate(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSelect)
