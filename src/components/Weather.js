import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';

const Weather = () => {
  const {
    city,
    country,
    temperature,
    description,
    humidity,
    error
  } = useContext(WeatherContext);
  return (
    <div className='mt-5'>
      {city && (
        <div className='d-flex justify-content-around'>
          <span>Your city is : </span>
          <span>{city}</span>
        </div>
      )}
      {country && (
        <div className='d-flex justify-content-around'>
          <span>Your country is : </span>
          <span>{country}</span>
        </div>
      )}
      {temperature && (
        <div className='d-flex justify-content-around'>
          <span>temperature in {city} is : </span>
          <span>{temperature}</span>
        </div>
      )}
      {description && (
        <div className='d-flex justify-content-around'>
          <span>Your description is : </span>
          <span>{description}</span>
        </div>
      )}
      {humidity && (
        <div className='d-flex justify-content-around'>
          <span> humidity in {city} is : </span>
          <span>{humidity}</span>
        </div>
      )}
      {error && <div className='alert alert-danger mt-5'>{error}</div>}
    </div>
  );
};

export default Weather;
