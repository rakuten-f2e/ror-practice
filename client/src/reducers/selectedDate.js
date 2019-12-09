export const selectedDate = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_DATE': {
      return action.selectedDate
    }
    default:
      return state;
  }
}
