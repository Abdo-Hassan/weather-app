export default (state, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        info: action.payload
      };
    case 'ERROR_WEATHER':
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};
