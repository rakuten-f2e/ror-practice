export const CHANGE_DATE = 'CHANGE_DATE'

export function changeDate(e) {
  return {
    type: CHANGE_DATE,
    selectedDate: e.target.value
  }
}
