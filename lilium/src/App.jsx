import React from 'react';

import { Route, Routes, BrowserRouter} from 'react-router-dom';

import './App.css'

import Certifier from './pages/Certifier';
import Company from './pages/Company';
import Bid from './pages/Bid';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/certifier" element ={<Certifier />} />
        <Route path="/company" element ={<Company />} />
        <Route path="/bid" element ={<Bid />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
