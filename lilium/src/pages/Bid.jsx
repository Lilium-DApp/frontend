import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import Company from "../abis/Company.json"; // Import your contract ABI
import React, { useState, useEffect } from "react";
import { ethers } from "ethers"; // Import ethers

function Bid() {
  const [quantity, setQuantity] = useState("");
  const [pricePerToken, setPricePerToken] = useState("");
  const [contract, setContract] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  const initializeContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = await provider.getSigner();
        const selectedAccount = await signer.getAddress();

        const contractAddress = "0x862260CB4B0c908c04389664eb395a144C7840Bf";

        const companyContract = new ethers.Contract(
          contractAddress,
          Company.abi,
          signer
        );

        console.log(companyContract.methods)

        setUserAccount(selectedAccount);
        setContract(companyContract);
      } else {
        console.error("MetaMask is not installed or not available.");
      }
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const handleSendBid = async () => {
    try {
      // Ensure quantity and pricePerToken are provided and are valid numbers
      if (!quantity || isNaN(quantity) || !pricePerToken) {
        console.error("Please enter valid quantity and price per token.");
        return;
      }
      // Call the 'newBid' function on your contract
      const transaction = await contract.newBid(quantity, {
        value: pricePerToken,
        gasLimit: 200000, // Set an appropriate gas limit
        // Add other transaction options if needed
      });
      
      // Wait for the transaction to be mined
      await transaction.wait();

      // Optionally, you can handle success here
      console.log("Successfully sent bid.");
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error sending bid:", error);
    }
  };

  // Initialize the contract when the component mounts
  useEffect(() => {
    initializeContract();
  }, []);
  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 shadow-md pb-4">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          New bid
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div>
            <div className="py-2  flex flex-col">
              <label>Amount: </label>
              <input
                type="number "
                className="text-darkgreen rounded focus:outline-none w-96"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="py-2  flex flex-col">
              <label>Price per token: </label>
              <input
                type="text "
                className="text-darkgreen rounded focus:outline-none w-96"
                value={pricePerToken}
                onChange={(e) => setPricePerToken(e.target.value)}
              />
            </div>
            <button
              className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8"
              onClick={handleSendBid}
            >
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

export default Bid;
