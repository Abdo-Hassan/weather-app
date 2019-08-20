import React, { Fragment, useState } from 'react';
import Weather from './Weather';

const Form = () => {
  const API_KEY = 'b2a12e61da773f976f2198048e736315';

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [info, setInfo] = useState({
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  });

  const getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city & country) {
      setInfo({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: null
      });
    } else {
      setInfo({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: 'Please Enter Your Data'
      });
    }
    //  setInfo({
    //     temperature: data.main.temp,
    //     city: data.name,
    //     country: data.sys.country,
    //     humidity: data.main.humidity,
    //     description: data.weather[0].description,
    //     error: null
    //   });
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
      <Weather temp={info} />
    </Fragment>
  );
};

export default Form;
