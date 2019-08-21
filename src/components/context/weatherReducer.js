export default (state, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        weatherInfo: action.payload
      };
    case 'ERROR_WEATHER':
      return {
        ...state,
        weatherInfo: action.payload
      };
    default:
      return state;
  }
};
