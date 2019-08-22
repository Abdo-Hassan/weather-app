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
        user: {
          ...state.user,
          long: action.payload.long,
          lat: action.payload.lat
        }
      };
    case 'GET_USER_WEATHER':
      return {
        ...state,
        user: { ...state.user, userTemp: action.payload }
      };
    default:
      return state;
  }
};
