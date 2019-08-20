import React from 'react';

const Weather = ({ temp }) => {
  return (
    <div style={{ color: 'green' }}>
      {temp.city && <p>Your city is : {temp.city}</p>}
      {temp.country && <p>Your country is : {temp.country}</p>}
      {temp.temperature && <p>Your Temperature is : {temp.temperature}</p>}
      {temp.description && <p>Your description is : {temp.description}</p>}
      {temp.humidity && <p>Your Humidity is : {temp.humidity}</p>}
      {/* <p style={{ color: 'red' }}>{temp.error && temp.error}</p> */}
    </div>
  );
};

export default Weather;
