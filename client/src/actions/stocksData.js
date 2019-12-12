import { getTodayStocks, getStockByIdOrDate } from '../api'

export const GET_STOCK_DATA = 'GET_STOCK_DATA'
export const SORT_STOCK_DATA = 'SORT_STOCK_DATA'
export const GET_SEARCH_STOCK_DATA = 'GET_SEARCH_STOCK_DATA'

export function sortStocksData(clickedIndex) {
  return {
    type: SORT_STOCK_DATA,
    clickedIndex
  }
}

export function getStocksData() {
  return (dispatch) => {
    getTodayStocks()
      .then(res => {
        dispatch({
          type: GET_STOCK_DATA,
          data: JSON.parse(JSON.stringify(res.data))
        })
    })
  }
}

export function searchStocksByIdOrDate(stockId, date) {
  return (dispatch) => {
    getStockByIdOrDate(stockId, date)
      .then(res => {
        dispatch({
          type: GET_SEARCH_STOCK_DATA,
          data: JSON.parse(JSON.stringify(res.data))
        })
    })
  }
}
