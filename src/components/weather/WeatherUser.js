import React, { useState } from 'react';

const WeatherUser = () => {
  const [location, setLocation] = useState({
    lat: '',
    long: ''
  });

  const { lat, long } = location;
  // get the user current location
  const getLocation = () => {
    const location = navigator && navigator.geolocation;
    // get the long && lat
    if (location) {
      location.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      });
    }
  };

  return (
    <div>
      <p className='lead'>Get your weather Date</p>
      <button onClick={getLocation}>Get your location</button>
      <p>lat : {lat}</p>
      <p>long : {long}</p>
    </div>
  );
};

export default WeatherUser;
