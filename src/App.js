import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import WeatherContextProvider from './components/context/WeatherContext';

function App() {
  return (
    <WeatherContextProvider>
      <div className='App'>
        <div className='container'>
          <Header />
          <WeatherForm />
          <Weather />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
