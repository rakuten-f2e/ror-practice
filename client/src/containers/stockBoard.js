import { connect } from 'react-redux'
import { changeTest } from '../actions'
import StockBoard from '../components/stockBoard'
// import * as obj from './action'

const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToProps = dispatch => ({
  changeTest: test => dispatch(changeTest(test))
})

const StockBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StockBoard)

export default StockBoardContainer