import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherUser = () => {
  const { getWeatherLocation, userTemp, lat, long } = useContext(
    WeatherContext
  );

  const setLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeatherLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  };

  return (
    <div>
      <p className='lead'>Get your weather Date</p>
      <button onClick={setLocation}>Get your Weather</button>
      <p>lat : {lat}</p>
      <p>long : {long}</p>
      <p>user Temp{userTemp}</p>
    </div>
  );
};

export default WeatherUser;
