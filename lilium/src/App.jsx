import React from 'react';

import { Route, Routes, BrowserRouter} from 'react-router-dom';

import './App.css'

import Certifier from './pages/Certifier';
import Company from './pages/Company';
import Bid from './pages/Bid';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Retire from './pages/Retire';


function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/transfer" element ={<Transfer />} />
        <Route path="/retire" element ={<Retire />} />
        <Route path="/certifier" element ={<Certifier />} />
        <Route path="/company" element ={<Company />} />
        <Route path="/bid" element ={<Bid />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
