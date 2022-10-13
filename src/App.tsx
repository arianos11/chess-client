import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import axiosApiInstance from './utils/axiosInstance';
import HomePage from './pages/homepage/homepage.component';

import Alerts from './components/alerts/alerts.component';

function App() {
  axiosApiInstance
    .get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="App">
      <Alerts />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
