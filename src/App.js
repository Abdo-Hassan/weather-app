import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherContextProvider from './components/context/WeatherContext';

function App() {
  return (
    <WeatherContextProvider>
      <div className='App'>
        <div className='container'>
          <Header />
          <WeatherForm />
        </div>
      </div>
    </WeatherContextProvider>
  );
}

export default App;
