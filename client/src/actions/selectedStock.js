export const CHANGE_STOCK = 'CHANGE_STOCK'

export function changeStock(e) {
  return {
    type: CHANGE_STOCK,
    selectedStock: e.target.value
  }
}
