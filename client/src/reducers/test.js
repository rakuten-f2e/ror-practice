export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST_STATE': {
      return {
        test: action.test,
      };
    }
    default:
      return state;
  }
};