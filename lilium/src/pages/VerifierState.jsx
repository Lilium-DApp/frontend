import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from 'axios';
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

function hexToString(hex) {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    const byte = parseInt(hex.substr(i, 2), 16);
    string += String.fromCharCode(byte);
  }
  return string;
}



const VerifierState = () => {
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("insert the link of the verifier state contract");
  console.log(address)

  
 
  

  const handleAuxiliarContracts = async () => {
    try {
      if (!address) {
        console.error("Please fill in all fields.");
        return;
      }
      const header = {"ngrok-skip-browser-warning": "69420"}
      axios.get(address,{header})
      .then(function (response) {
        setAnswer(hexToString(response.data["reports"]["0"]["payload"]))
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
            <label>Link: </label>
            <input 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text" 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          
          <button 
          onClick={handleAuxiliarContracts}
          className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96" >Send</button>
          <p className="mt-4">{answer}</p>
        </div>
        
      </div>
      <img src={logo} className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	" />
      
    </div>
  );
};

export default VerifierState;
