import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

// import axiosApiInstance from './utils/axiosInstance';

import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';

import Alerts from './components/alerts/alerts.component';

function App() {
  // axiosApiInstance
  //   .get('https://pokeapi.co/api/v2/pokemon/ditto')
  //   .then((data) => {
  //     console.log(data);
  //   });
  return (
    <div className="App">
      <Alerts />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
