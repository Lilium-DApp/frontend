import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Company from "../abis/Company.json";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

function Certifier() {
  const [amount, setAmount] = useState("");
  const [contract, setContract] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [duration, setDuration] = useState("");
  const [reservePrice, setReservePrice] = useState("");
  const [auctionAmount, setAuctionAmount] = useState("");

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

  const handleMintTokens = async () => {
    try {
      // Ensure an amount is provided and it's a valid number
      if (!amount || isNaN(amount)) {
        console.error("Please enter a valid amount.");
        return;
      }

      // Call the 'mint' function on your contract
      await contract.mint(amount);

      // Optionally, you can handle success here
      console.log(`Successfully minted ${amount} tokens.`);
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error minting tokens:", error);
    }
  };

  const handleCreateAuction = async () => {
    try {
      // Ensure all required fields are filled
      if (!auctionAmount || !duration || !reservePrice) {
        console.error("Please fill in all fields.");
        return;
      }

      // Call the 'newAuction' function on your contract
      await contract.newAuction(auctionAmount, duration, reservePrice);

      // Optionally, you can handle success here
      console.log("Successfully created a new auction.");
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error creating a new auction:", error);
    }
  };

  const finishAuction = async () => {
    try {
      // Call the 'finishAuction' function on your contract
      await contract.finishAuction();
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error finishing auction:", error);
    }
  };

  useEffect(() => {
    initializeContract();
  }, []);

  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 shadow-md pb-4">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Mint new tokens
        </h1>
        <div className="flex flex-col text-white items-center divide-y divide-lightgreen">
          <div>
            <div className="py-2  flex flex-col">
              <label>Amount: </label>
              <input
                type="text "
                className="text-darkgreen rounded focus:outline-none w-96"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8"
              onClick={handleMintTokens}
            >
              Send
            </button>
          </div>
          <div className="w-96">
            <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
              Create new auction
            </h1>
            <div className="py-2  flex flex-col">
              <label>Amount of auction tokens: </label>
              <input
                type="number"
                className="text-darkgreen rounded focus:outline-none w-96"
                value={auctionAmount}
                onChange={(e) => setAuctionAmount(e.target.value)}
              />
            </div>
            <div className="py-2  flex flex-col">
              <label>Duration (hours): </label>
              <input
                type="int"
                className="text-darkgreen rounded focus:outline-none w-96"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="py-2  flex flex-col">
              <label>Minumum price: </label>
              <input
                type="text"
                className="text-darkgreen rounded focus:outline-none w-96"
                value={reservePrice}
                onChange={(e) => setReservePrice(e.target.value)}
              />
            </div>
            <button
              className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8"
              onClick={handleCreateAuction}
            >
              Create auction
            </button>
            <button className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8" onClick={finishAuction}>
              Finish auction
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
