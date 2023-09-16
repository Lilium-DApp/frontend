import React from "react";
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";


import Certifier from './pages/Certifier';
import Company from './pages/Company';
import Bid from './pages/Bid';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Retire from './pages/Retire';
import Device from "./pages/Device";
import VerifierState from "./pages/VerifierState";

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/transfer" element ={<Transfer />} />
        <Route path="/retire" element ={<Retire />} />
        <Route path="/certifier" element ={<Certifier />} />
        <Route path="/company" element ={<Company />} />
        <Route path="/bid" element ={<Bid />} />
        <Route path="/iotsimulation" element ={<IotSimulation />} />
        <Route path="/auxiliacontracts" element ={<AuxiliarContracts />} />
        <Route path="/device" element={<Device />} />
        <Route path="/verifierState" element={<VerifierState />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
