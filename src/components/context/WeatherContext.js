import React, { createContext, useReducer } from 'react';
import weatherReducer from './weatherReducer';
import axios from 'axios';

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
      temperature: null,
      humidity: null,
      description: null
    },
    lat: '',
    long: ''
  };

  const [state, dispatch] = useReducer(weatherReducer, initState);
  // get weather info from api
  const getWeather = async (city, country) => {
    const API_KEY = 'b2a12e61da773f976f2198048e736315';
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      )
      .then(res => {
        const data = res.data;
        const weather = {
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: null
        };
        dispatch({ type: 'GET_WEATHER', payload: weather });
      })
      .catch(err => {
        const weatherError = {
          temperature: null,
          city: null,
          country: null,
          humidity: null,
          description: null,
          error: 'Please Enter your data'
        };
        dispatch({ type: 'ERROR_WEATHER', payload: weatherError });
      });
  };

  const getUserWeather = async ({ lat, lon }) => {
    const API_KEY = 'b2a12e61da773f976f2198048e736315';
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(res => {
        const data = res.data;
        const weather = {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description
        };
        dispatch({ type: 'GET_USER_WEATHER', payload: weather });
        console.log(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  // get the user location
  const getWeatherLocation = location => {
    dispatch({ type: 'GET_USER_LOCATION', payload: location });
    getUserWeather(location);
  };

  return (
    <WeatherContext.Provider
      value={{
        city: state.info.city,
        country: state.info.country,
        error: state.info.error,
        temperature: state.info.temperature,
        humidity: state.info.humidity,
        description: state.info.description,
        temperatureUser: state.user.temperature,
        humidityUser: state.user.humidity,
        descriptionUser: state.user.description,
        lat: state.lat,
        long: state.long,
        getWeather,
        getWeatherLocation,
        getUserWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
