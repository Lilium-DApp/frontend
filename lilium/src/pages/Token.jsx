import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers"; // Import ethers
import CarbonCredit from "../abis/CarbonCredit.json"; // Import your contract ABI


function Certifier() {

  const [userAccount, setUserAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [retireAmount, setRetireAmount] = useState(0);

  const initializeContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = await provider.getSigner();
        const selectedAccount = await signer.getAddress();

        const contractAddress = "0x7D539A6773C550a8e308BBc3A2E68d6326Dfe14B";

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

  const retire = async () => {
    try {
      await contract.retire(retireAmount);
    
      console.log(`Successfully retired.`);
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error retiring: ", error);
    }
  };

  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 shadow-md pb-4">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Retire tokens
        </h1>
        <div className="flex flex-col text-white items-center divide-y divide-lightgreen">
          <div>
            <div className="py-2  flex flex-col">
              <label>Amount: </label>
              <input
                type="text "
                className="text-darkgreen rounded focus:outline-none w-96"
                onChange={(e) => setRetireAmount(e.target.value)}
                value={retireAmount}
              />
            </div>
            <button className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8"
            onClick={retire}>
              Send
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

export default Certifier;
