import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherUser = () => {
  const { getWeatherLocation } = useContext(WeatherContext);
  return (
    <div>
      <p className='lead'>Get your weather Date</p>
      <button onClick={getWeatherLocation}>Get your location</button>
    </div>
  );
};

export default WeatherUser;
