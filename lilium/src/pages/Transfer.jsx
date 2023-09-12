import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers"; 
import CarbonCredit from "../abis/Company.json"; 


function Transfer() {

  const [userAccount, setUserAccount] = useState("");
  const [contract, setContract] = useState(null);

  const [transferWallet, setTransferWallet] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);

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

  const transfer = async () => {
    try {
      await contract.transferCarbonCredits(transferWallet, transferAmount);

      console.log(`Successfully retired.`);
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error retiring: ", error);
    }
  };

  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="bg-darkgreen w-4/12 py-12 rounded-md ml-40 shadow-md">
        <div className="flex flex-col text-white items-center">
          <div className="w-96">
            <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
              Transfer
            </h1>
            <div className="py-2  flex flex-col">
              <label>Wallet: </label>
              <input
                onChange={(e) => setTransferWallet(e.target.value)}
                value={transferWallet}
                type="text"
                className="text-darkgreen rounded focus:outline-none w-96"
              />
            </div>
            <div className="py-2  flex flex-col">
              <label>Amount: </label>
              <input
                onChange={(e) => setTransferAmount(e.target.value)}
                value={transferAmount}
                type="number"
                className="text-darkgreen rounded focus:outline-none w-96"
              />
            </div>

            <button 
            onClick={transfer}
            className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8">
              Transfer tokens
            </button>
          </div>
          
        </div>
      </div>

      <img
        src={logo}
        className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	"
      />
    </div>
  );
}

export default Transfer;
