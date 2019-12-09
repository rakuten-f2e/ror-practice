import { getSidOptions } from '../api'

export const GET_STOCK_OPTION = 'GET_STOCK_OPTION'

export function getStockOption(data) {
  return {
    type: GET_STOCK_OPTION,
    stockOption: data
  }
}

export function getStockOptionApi() {
  return (dispatch) => {
    getSidOptions()
      .then(res => {
        dispatch(getStockOption([...res.data]))
      })
  }
}
