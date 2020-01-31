import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

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
      <ul className='list-group'>
        {city && (
          <li className='list-group-item d-flex justify-content-between align-items-center weather-list'>
            <div className='d-flex justify-content-around'>
              <span>City : </span>
            </div>
            <span className='badge badge-danger dataBadge'>{city}</span>
          </li>
        )}
        {country && (
          <li className='list-group-item d-flex justify-content-between align-items-center weather-list'>
            <div className='d-flex justify-content-around'>
              <span>Country : </span>
            </div>
            <span className='badge badge-danger dataBadge'>{country}</span>
          </li>
        )}
        {temperature && (
          <li className='list-group-item d-flex justify-content-between align-items-center weather-list'>
            <div className='d-flex justify-content-around'>
              <span>Temperature in {city} : </span>
            </div>
            <span className='badge badge-danger dataBadge'>
              {Math.ceil(temperature)} C
            </span>
          </li>
        )}
        {description && (
          <li className='list-group-item d-flex justify-content-between align-items-center weather-list'>
            <div className='d-flex justify-content-around'>
              <span>Weather condition : </span>
            </div>
            <span className='badge badge-danger dataBadge'>{description}</span>
          </li>
        )}
        {humidity && (
          <li className='list-group-item d-flex justify-content-between align-items-center weather-list'>
            <div className='d-flex justify-content-around'>
              <span> Humidity in {city} : </span>
            </div>
            <span className='badge badge-danger dataBadge'>{humidity} %</span>
          </li>
        )}
      </ul>
      {error && <div className='alert alert-danger mt-5'>{error}</div>}
    </div>
  );
};

export default Weather;
