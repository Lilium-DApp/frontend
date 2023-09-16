import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from 'axios';
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

const VerifierState = () => {
  const [address, setAddress] = useState("");
  console.log(address)

  
  const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    'Host': 'rnoqt-189-201-201-2.a.free.pinggy.online',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/117.0',
    "ngrok-skip-browser-warning": "69420"
  };
  

  const handleAuxiliarContracts = async () => {
    try {
      if (!address) {
        console.error("Please fill in all fields.");
        return;
      }

      axios.get(address, {headers})
      .then(function (response) {

        console.log('Resposta da API:', response.data);
      })
      .catch(function (error) {
        console.error('Erro na requisição:', error);
      });
    
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="font-monsterrat">
        <Navbar />
      <div className="bg-darkgreen w-4/12 py-12 rounded-md ml-40 shadow-md">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Verifier State
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div className="py-2  flex flex-col">
            <label>Address: </label>
            <input 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text" 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          
          <button 
          onClick={handleAuxiliarContracts}
          className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96" >Send</button>
        </div>
      </div>
      <img src={logo} className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	" />
    </div>
  );
};

export default VerifierState;
