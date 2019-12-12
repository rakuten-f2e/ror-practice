import { getDateOptions } from '../api'

export const GET_DATE_OPTION = 'GET_DATE_OPTION'

export function getDateOption() {
  return (dispatch) => {
    getDateOptions()
      .then(res => {
        dispatch({
          type: GET_DATE_OPTION,
          dateOption: [...res.data]
        })
    })
  }
}
