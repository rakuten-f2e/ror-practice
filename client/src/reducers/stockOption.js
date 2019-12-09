export const stockOption = (state = [], action) => {
  switch (action.type) {
    case 'GET_STOCK_OPTION': {
      return action.stockOption   
    }
    default:
      return state;
  }
}
