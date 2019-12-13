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

const stocksData = (state = [], action) => {
  switch (action.type) {
    case 'GET_STOCK_DATA':
      return action.data
    case 'SORT_STOCK_DATA': {
      const stocksData = [...state]
      const condition = HEADING[action.clickedIndex]
    
      return stocksData.sort((a,b) => {
        return a[condition] <=  b[condition] ? 1 : -1
      })  
    }
    case 'GET_SEARCH_STOCK_DATA':
      return action.data
    default:
      return state
  }
}

export default stocksData
