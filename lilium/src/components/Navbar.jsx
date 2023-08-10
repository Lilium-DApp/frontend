import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

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
    <div className="flex justify-between font-semibold text-grey items-center my-2 mx-10 font-montserrat">
      <span className="flex justify-between items-center gap-14">
        <img src={logo} alt="logo" width="50" height="50" />
      </span>
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
