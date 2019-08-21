import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import WeatherContextProvider from './components/context/WeatherContext';
import WeatherWrapper from './components/weather/WeatherWrapper';

function App() {
  return (
    <WeatherContextProvider>
      <div className='App'>
        <Header />
        <WeatherWrapper />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
