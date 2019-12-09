import { getTodayStocks, getStockByIdOrDate } from '../api'

export const GET_STOCK_DATA = 'GET_STOCK_DATA'
export const SORT_STOCK_DATA = 'SORT_STOCK_DATA'
export const GET_SEARCH_STOCK_DATA = 'GET_SEARCH_STOCK_DATA'

export function getStocksData(data) {
  return {
    type: GET_STOCK_DATA,
    data
  }
}

export function sortStocksData(clickedIndex) {
  return {
    type: SORT_STOCK_DATA,
    clickedIndex
  }
}

export function searchStocksByIdOrDate(data) {
  return {
    type: GET_SEARCH_STOCK_DATA,
    data
  }
}

export function getStocksDataApi() {
  return (dispatch) => {
    getTodayStocks()
      .then(res => {
        dispatch(getStocksData(JSON.parse(JSON.stringify(res.data))))
      })
  }
}

export function searchStocksByIdOrDateApi(stockId, date) {
  return (dispatch) => {
    getStockByIdOrDate(stockId, date)
      .then(res => {
        dispatch(searchStocksByIdOrDate(JSON.parse(JSON.stringify(res.data))))
      })
  }
}
