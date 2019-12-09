const selectedStock = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_STOCK': {
      return action.selectedStock
    }
    default:
      return state;
  }
}

export default selectedStock
