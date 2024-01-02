import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-full bg-slate-700 h-screen justify-center items-center grid">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='text-4xl text-white text-center' >Benvenuto nel corso React 101</h1>
    </div>
  );
}

export default App;
