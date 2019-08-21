import React, { Fragment, useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherForm = () => {
  const [info, setInfo] = useState({
    city: '',
    country: ''
  });

  const { getWeather } = useContext(WeatherContext);
  const { city, country } = info;

  const onChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    getWeather(city, country);
  };

  return (
    <Fragment>
      {/* search form */}
      <form onSubmit={onSubmit}>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='inputGroup-sizing-default'>
              City
            </span>
          </div>
          <input
            type='text'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            name='city'
            value={city}
            onChange={onChange}
            placeholder='Enter your city'
            autoFocus
          />
        </div>

        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='inputGroup-sizing-default'>
              Country
            </span>
          </div>
          <input
            type='text'
            className='form-control'
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            name='country'
            value={country}
            onChange={onChange}
            placeholder='Enter your country'
          />
        </div>
        <button className='btn btn-success btn-lg'>Search Weather</button>
      </form>
      {/* search form */}
    </Fragment>
  );
};

export default WeatherForm;
