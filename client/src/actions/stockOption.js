import { getSidOptions } from '../api'

export const GET_STOCK_OPTION = 'GET_STOCK_OPTION'

export function getStockOption() {
  return (dispatch) => {
    getSidOptions()
      .then(res => {
        dispatch({
          type: GET_STOCK_OPTION,
          stockOption: [...res.data]
        })
      })
  }
}
