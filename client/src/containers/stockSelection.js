import { connect } from 'react-redux'
import { changeStock } from '../actions/selectedStock'
import DropdownSelect from '../components/stockBoard/dropdownSelect'

const mapStateToProps = state => ({
  options: state.stockOption
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeStock(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownSelect)
