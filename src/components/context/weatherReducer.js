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
    case 'GET_USER_LOCATION':
      return {
        ...state,
        user: action.payload
      };
    case 'GET_USER_WEATHER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
