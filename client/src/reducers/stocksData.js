const HEADING = [
	'created_at', 
	'number', 
	'stock_id', 
	'name', 
	'opening_price', 
	'highest_price', 
	'floor_price', 
	'yesterday_closing_price', 
	'today_closing_price', 
	'volumes', 
	'fluctuation', 
	'fluctuation_rate'
]

export const stocksData = (state = [], action) => {
  switch (action.type) {
    case 'GET_STOCK_DATA': {
      return action.stocksData  
    }
    case 'SORT_STOCK_DATA': {
      const stocksData = [...state]
      const index = action.clickedIndex
      const condition = HEADING[index]
    
      return stocksData.sort((a,b) => {
        if ( index === 3) return a[condition].localeCompare(b[condition])
        return a[condition] <=  b[condition] ? 1 : -1
      })  
    }
    case 'GET_SEARCH_STOCK_DATA': {
      return action.data
    }
    default:
      return state;
  }
}
