import { getDateOptions } from '../api'

export const GET_DATE_OPTION = 'GET_DATE_OPTION'

export function getDateOption(data) {
  return {
    type: GET_DATE_OPTION,
    data
  }
}

export function getDateOptionApi() {
  return (dispatch) => {
    getDateOptions()
      .then(res => {
        dispatch(getDateOption([...res.data]))
      })
  }
}
