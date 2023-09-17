import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from 'axios';

import CertifierAbi from "../abis/Certifier.json";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar"



function Certifier() {


  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [allowance, setAllowance] = useState(0);
  const [compensation, setCompensation] = useState(0);
  const [agent, setAgent] = useState("");  
  const [cid, setCid] = useState("");
  const [file, setFile] = useState(null);


  const [contract, setContract] = useState("");
  const [userAccount, setUserAccount] = useState("");

  const handleFileChange = (event) => {
    const files = event.target.files[0];
    setFile(files);
  };


  const initializeContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const selectedAccount = await signer.getAddress();

        const contractAddress = "0x0505cc9c14d414abed28b8315f4bfb00c3a8aa76";

        const companyContract = new ethers.Contract(
          contractAddress,
          CertifierAbi.abi,
          signer
        );

        setUserAccount(selectedAccount);
        setContract(companyContract);

      } else {
        console.error("MetaMask is not installed or not available.");
      }
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const handleCreateCompany = async () => {
    try {

      if (!file) {
        console.warn('Select a file to upload.');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              pinata_api_key: '71da0abde10be07176b7',
              pinata_secret_api_key: 'ad583a9c692868d9b0bf63d2986797c4355651f6b36e9eab671ea5eb5b48d174',
            },
          }
        );
        setCid(response.data.IpfsHash);
        console.log('Successful upload', response.data.IpfsHash);

      } catch (error) {
        console.error('Error uploading file:', error);
      }
     
      await contract.newCompany(cid, name, country, industry, allowance, compensation, agent);
      console.log('Successfully created company');
    } 
    catch  (error){
      console.error("Error creating company:", error);
    }
  }

  useEffect(() => {
    initializeContract();
  }, []);



  return (
    <div className="font-monsterrat">
        <Navbar />
      <div className="bg-darkgreen w-4/12 py-12 rounded-md ml-40 shadow-md">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Register new company
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div className="py-2  flex flex-col">
            <label>Company Name: </label>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text " 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>

          <div className="py-2  flex flex-col">
            <label>Country: </label>
            <input 
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text " 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          <div className="py-2 flex flex-col">
            <label>Industry: </label>
            <input 
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            type="text "  
            className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>Allowance: </label>
            <input 
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
            type="number"
            className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>Compensation: </label>
            <input 
            value={compensation}
            onChange={(e) => setCompensation(e.target.value)}
            type="number" 
            className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          <div className="py-2 flex flex-col">
            <label>Agent: </label>
            <input 
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            type="text "  
            className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>CID: </label>
            <input 
            onChange={handleFileChange}
            multiple
            type="file" 
            className="w-96"/>
          </div>
          <button 
          onClick={handleCreateCompany}
          className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96" >Send</button>
        </div>
      </div>
      <img src={logo} className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	" />
    </div>
  );
}

export default Certifier;
