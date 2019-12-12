const dateOption = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATE_OPTION': {
      return action.dateOption   
    }
    default:
      return state;
  }
}

export default dateOption
