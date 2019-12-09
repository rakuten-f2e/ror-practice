import { combineReducers } from 'redux'
import { selectedDate } from './selectedDate'
import { selectedStock } from './selectedStock'
import { dateOption } from './dateOption'
import { stockOption } from './stockOption'
import { stocksData } from './stocksData'

export default combineReducers({
  selectedDate,
  dateOption,
  stockOption,
  selectedStock,
  stocksData
})
