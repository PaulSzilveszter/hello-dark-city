import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<LandingPage />}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
 </BrowserRouter>
);

