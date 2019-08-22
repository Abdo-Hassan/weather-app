import React, { createContext, useReducer } from 'react';
import weatherReducer from './weatherReducer';

export const WeatherContext = createContext();

const WeatherContextProvider = props => {
  const initState = {
    info: {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null
    },
    user: {
      lat: '',
      long: '',
      userTemp: ''
    }
  };

  const [state, dispatch] = useReducer(weatherReducer, initState);

  // get weather info from api
  const getWeather = async (city, country) => {
    const API_KEY = 'b2a12e61da773f976f2198048e736315';
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    try {
      const weather = {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: null
      };

      dispatch({ type: 'GET_WEATHER', payload: weather });
    } catch (error) {
      const weatherError = {
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: 'Please Enter your data'
      };
      dispatch({ type: 'ERROR_WEATHER', payload: weatherError });
    }
  };

  // get the user current location
  const getUserLocation = () => {
    const userLocation = navigator && navigator.geolocation;
    if (userLocation) {
      userLocation.getCurrentPosition(position => {
        const latLong = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        dispatch({ type: 'GET_USER_LOCATION', payload: latLong });
      });
    }
  };

  // get the user weather data
  // const getWeatherLocation = async (lat, long) => {
  //   const API_KEY = 'b2a12e61da773f976f2198048e736315';
  //   // get the user weather data
  //   const api_call = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
  //   );
  //   const data = await api_call.json();
  //   const userTemp = data.main.temp;
  //   dispatch({ type: 'GET_USER_WEATHER', payload: userTemp });
  // };

  return (
    <WeatherContext.Provider
      value={{
        temperature: state.info.temperature,
        city: state.info.city,
        country: state.info.country,
        humidity: state.info.humidity,
        description: state.info.description,
        error: state.info.error,
        userTemp: state.user.userTemp,
        lat: state.user.lat,
        long: state.user.long,
        getWeather,
        getUserLocation
        // getWeatherLocation
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
