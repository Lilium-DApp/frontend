import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

function NavBar() {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  ;

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };


  return (
    <div className="flex justify-between font-semibold text-grey items-center my-2 mx-10 font-montserrat mb-12">
      <div className="flex gap-5">
        <span className="flex justify-between items-center gap-14">
          <Link to='/' className="hover:scale-110 duration-100 transition"><img src={logo} alt="logo" width="50" height="50" /></Link>
        </span>
        <Link to='/certifier' className="hover:scale-110 duration-100 transition p-4">Certifier</Link>
        <Link to='/company' className="hover:scale-110 duration-100 transition p-4">Company</Link>
        <Link to='/bid' className="hover:scale-110 duration-100 transition p-4">Bid</Link>
        <Link to='/transfer' className="hover:scale-110 duration-100 transition p-4">Transfer</Link>
        <Link to='/retire' className="hover:scale-110 duration-100 transition p-4">Retire</Link>
        <Link to='/iotsimulation' className="hover:scale-110 duration-100 transition p-4">Iot Simulation </Link>
        <Link to='/auxiliacontracts' className="hover:scale-110 duration-100 transition p-4">Auxiliar Contracts </Link>
      </div>
      <button
        type="button"
        className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out text-black"
        onClick={connectWallet}
      >
        {isConnected ? 'Connected wallet: ' + accountAddress.substring(0, 6) + '...' + accountAddress.substring(38, 42) : 'Connect wallet'}
      </button>
    </div>
  );
}

export default NavBar;
