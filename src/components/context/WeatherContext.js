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
    }
  };

  const [state, dispatch] = useReducer(weatherReducer, initState);

  // get weather info from api
  const getWeather = async info => {
    const API_KEY = 'b2a12e61da773f976f2198048e736315';
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${
        state.city
      },${state.country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    const weather = {
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: null
    };

    const weatherError = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: 'Please Enter your data'
    };
    try {
      dispatch({ type: 'GET_WEATHER', payload: weather });
    } catch (error) {
      dispatch({ type: 'ERROR_WEATHER', payload: weatherError });
    }
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
        getWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
