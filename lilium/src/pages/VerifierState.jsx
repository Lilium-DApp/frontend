import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import CompanyAbi from "../abis/Company.json";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

const VerifierState = () => {
  const [userAccount, setUserAccount] = useState("");
  const [contract, setContract] = useState(null);

  const initializeContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const signer = await provider.getSigner();
        const selectedAccount = await signer.getAddress();

        const contractAddress = "0xD5a08Cc53bE0205323CA83C66C22A13E09b93130";

        const companyContract = new ethers.Contract(
          contractAddress,
          CarbonCredit.abi,
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
  useEffect(() => {
    initializeContract();
  }, []);
  return (
    <div className="font-monsterrat">
      <Navbar />
    </div>
  );
};

export default VerifierState;
