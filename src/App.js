import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'b2a12e61da773f976f2198048e736315';

function App() {
  const getWeather = async () => {
    const api_call = await fetch(
      `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
  };
  return (
    <div className='App'>
      <Titles />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
