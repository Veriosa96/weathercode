const inizialState = {
  DataWeather: {
    city: "Roma",
    cityWeather: {},
    weather: [],
  },
};
const mainReducers = (state = inizialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        city:action.payload,
      };

      case "CITY_WEATHER":
        return {
            ...state,
            cityWeather: action.payload,
        };

    default: 
      return state;

  }
};

export default mainReducers;
