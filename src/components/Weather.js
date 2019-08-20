import React from 'react';

const Weather = ({ temp }) => {
  return (
    <div className='mt-5'>
      {temp.city && (
        <div className='d-flex justify-content-around'>
          <span>Your city is : </span>
          <span>{temp.city}</span>
        </div>
      )}
      {temp.country && (
        <div className='d-flex justify-content-around'>
          <span>Your country is : </span>
          <span>{temp.country}</span>
        </div>
      )}
      {temp.temperature && (
        <div className='d-flex justify-content-around'>
          <span>temperature in {temp.city} is : </span>
          <span>{temp.temperature}</span>
        </div>
      )}
      {temp.description && (
        <div className='d-flex justify-content-around'>
          <span>Your description is : </span>
          <span>{temp.description}</span>
        </div>
      )}
      {temp.humidity && (
        <div className='d-flex justify-content-around'>
          <span> humidity in {temp.city} is : </span>
          <span>{temp.humidity}</span>
        </div>
      )}
      {temp.error && (
        <div className='alert alert-danger mt-5'>{temp.error}</div>
      )}
    </div>
  );
};

export default Weather;
