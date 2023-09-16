import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import CompanyAbi from "../abis/Company.json";
import { ethers } from "ethers";


function AuxiliarContracts() {
    const [auction, setAuction] = useState("");
    const [verifier, setVerifier] = useState("");
    const [contract, setContract] = useState("");
    const [userAccount, setUserAccount] = useState("");

    const initializeContract = async () => {
        try {
          if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner();
            const selectedAccount = await signer.getAddress();
    
            const contractAddress = "0xD5a08Cc53bE0205323CA83C66C22A13E09b93130";
    
            const companyContract = new ethers.Contract(
              contractAddress,
              CompanyAbi.abi,
              signer
            );
    
            console.log(companyContract.methods);
    
            setUserAccount(selectedAccount);
            setContract(companyContract);
          } else {
            console.error("MetaMask is not installed or not available.");
          }
        } catch (error) {
          console.error("Error initializing contract:", error);
        }
      };

      useEffect(() => {
        initializeContract();
      }, []);

    const handleAuxiliarContracts = async () => {
    try {
        // Ensure all required fields are filled
        if (!auction|| !verifier) {
        console.error("Please fill in all fields.");
        return;
        }

        // Call the 'newAuction' function on your contract
        await contract.setAuxiliaryContracts(auction, verifier)

        // Optionally, you can handle success here
        console.log("Successfully sent data.");

    } catch (error) {
        // Handle any errors that may occur during the transaction
        console.error("Error:", error);
    }
    };


  return (
    <div className="font-monsterrat">
        <Navbar />
      <div className="bg-darkgreen w-4/12 py-12 rounded-md ml-40 shadow-md">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Auxiliar Contracts
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div className="py-2  flex flex-col">
            <label>Cartesi dApp Auction: </label>
            <input 
            value={auction}
            onChange={(e) => setAuction(e.target.value)}
            type="text" 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>

          <div className="py-2  flex flex-col">
            <label>Cartesi dApp Verifier: </label>
            <input 
            value={verifier}
            onChange={(e) => setVerifier(e.target.value)}
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
}

export default AuxiliarContracts;
