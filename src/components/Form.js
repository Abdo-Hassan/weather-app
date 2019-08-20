import React, { Fragment, useState } from 'react';

const Form = () => {
  const API_KEY = 'b2a12e61da773f976f2198048e736315';

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  return (
    <Fragment>
      {/* search form */}
      <form onSubmit={getWeather}>
        <div>
          <input
            type='text'
            placeholder='city'
            value={city}
            onChange={e => setCity(e.target.value)}
            autoFocus
          />
          <input
            type='text'
            placeholder='country'
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </div>
        <button>Get Weather</button>
      </form>
      {/* search form */}
    </Fragment>
  );
};

export default Form;
