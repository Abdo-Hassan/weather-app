import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherUser = () => {
  const {
    getWeatherLocation,
    temperatureUser,
    descriptionUser,
    humidityUser
  } = useContext(WeatherContext);

  const setLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeatherLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  };

  return (
    <div>
      <h2 className='lead'>Get your weather Date</h2>
      <button onClick={setLocation} className='btn btn-dark btn-lg m-4'>
        Get Weather
      </button>
      <div className='user-weather'>
        <ul className='list-group'>
          {temperatureUser && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Temperature : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {Math.ceil(temperatureUser - 273.15)} C
              </span>
            </li>
          )}
          {descriptionUser && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Weather condition : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {descriptionUser}
              </span>
            </li>
          )}
          {humidityUser && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Humidity : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {humidityUser} %
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WeatherUser;
