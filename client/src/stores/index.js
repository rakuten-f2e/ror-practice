import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { searchStocksByIdOrDate } from '../actions/stocksData';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

let { selectedDate, selectedStock } = store.getState()

store.subscribe(()=>{ 
  const { selectedDate: nextSelectedDate, selectedStock: nextSelectedStock } = store.getState()
  
  if ( selectedDate !== nextSelectedDate || selectedStock !== nextSelectedStock) {
    const stockId = nextSelectedStock === 'all' ? '' : nextSelectedStock
    const date = nextSelectedDate === 'all' ? '' : nextSelectedDate

    selectedStock = nextSelectedStock
    selectedDate = nextSelectedDate
  
    store.dispatch(searchStocksByIdOrDate(stockId, date))
  }
  
})

export default store
