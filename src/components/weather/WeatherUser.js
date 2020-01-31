import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherUser = () => {
  const {
    getWeatherLocation,
    userTemp,
    userTime,
    userSummary,
    userPressure,
    userHumidity
  } = useContext(WeatherContext);

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
      <h2 className='lead'>Get your weather Date</h2>
      <button onClick={setLocation} className='btn btn-dark btn-lg m-4'>
        Get Weather
      </button>
      <div className='user-weather'>
        <ul className='list-group'>
          {userTemp && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Temperature : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {Math.ceil(((userTemp - 32) * 5) / 9)} C
              </span>
            </li>
          )}
          {userTime && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Time : </span>
              </div>
              <span className='badge badge-primary dataBadge'>{userTime}</span>
            </li>
          )}
          {userSummary && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Weather summary : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {userSummary}
              </span>
            </li>
          )}
          {userPressure && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span>Weather pressure : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {userPressure}
              </span>
            </li>
          )}
          {userHumidity && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Humidity : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {userHumidity} %
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WeatherUser;
