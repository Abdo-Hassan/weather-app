import React from 'react';

const Weather = ({ temp }) => {
  return (
    <div>
      <p>
        {temp.city ? (
          <span style={{ color: 'green' }}>
            Temperature in {temp.city} is : {temp.temperature}
          </span>
        ) : (
          <span style={{ color: 'red' }}>Enter your city & country</span>
        )}
      </p>
    </div>
  );
};

export default Weather;
