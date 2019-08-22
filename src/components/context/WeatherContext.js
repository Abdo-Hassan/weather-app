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
      lat: '',
      long: '',
      userTemp: ''
    }
  };

  const [state, dispatch] = useReducer(weatherReducer, initState);

  // get weather info from api
  const getWeather = async (city, country) => {
    const API_KEY = 'b2a12e61da773f976f2198048e736315';
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
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

  const getUserWeather = async location => {
    const API_KEY = 'd96f10357e6009550c22c7568cac8979';
    console.log(location);
    await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY}/${
          location.lat
        },${location.long}`
      )
      .then(res => {
        console.log(res.data);
        const userTemp = res.data.currently.temperature;
        dispatch({ type: 'GET_USER_WEATHER', payload: userTemp });
      })
      .catch(err => {
        console.log(err);
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
        getWeatherLocation,
        getUserWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
