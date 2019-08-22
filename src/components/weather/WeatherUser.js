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
      <button onClick={setLocation} className='btn btn-success btn-lg m-4'>
        Get your Weather Data
      </button>
      <div className='text-dark' style={{ marginTop: 76 }}>
        <ul className='list-group'>
          {userTemp && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Temperature is : </span>
              </div>
              <span className='badge badge-primary dataBadge'>{userTemp}</span>
            </li>
          )}
          {userTime && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Time is : </span>
              </div>
              <span className='badge badge-primary dataBadge'>{userTime}</span>
            </li>
          )}
          {userSummary && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Weather summary is : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {userSummary}
              </span>
            </li>
          )}
          {userPressure && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span>Weather pressure is : </span>
              </div>
              <span className='badge badge-primary dataBadge'>
                {userPressure}
              </span>
            </li>
          )}
          {userHumidity && (
            <li className='list-group-item d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-around'>
                <span> Humidity is : </span>
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
