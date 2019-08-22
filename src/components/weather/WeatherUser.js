import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherUser = () => {
  const { getUserLocation, lat, long } = useContext(WeatherContext);

  return (
    <div>
      <p className='lead'>Get your weather Date</p>
      <button onClick={getUserLocation}>Get your location</button>
      <p>lat : {lat}</p>
      <p>long : {long}</p>
    </div>
  );
};

export default WeatherUser;
