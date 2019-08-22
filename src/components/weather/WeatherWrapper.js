import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherUser from './WeatherUser';
import WeatherData from './WeatherData';
const WeatherWrapper = () => {
  return (
    <div className='container wrapper'>
      <div className='row'>
        <div className='col-md-5'>
          <WeatherUser />
        </div>
        <div className='col-md-7'>
          <WeatherForm />
          <WeatherData />
        </div>
      </div>
    </div>
  );
};

export default WeatherWrapper;
