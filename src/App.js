import React from 'react';
import './App.css';
import Header from './components/Header';
import weatherForm from './components/weatherForm';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <weatherForm />
      </div>
    </div>
  );
}

export default App;
