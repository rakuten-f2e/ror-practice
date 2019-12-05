export const CHANGE_TEST = 'CHANGE_TEST'

export function changeTest(test) {
  return {
    type: CHANGE_TEST,
    test
  }
}
