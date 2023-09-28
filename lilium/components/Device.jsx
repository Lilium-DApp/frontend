'use client';

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ForestReserve from '@/abis/ForestReserve';

const Device = () => {
    const [address, setAddress] = useState('');
    const [contract, setContract] = useState('');

    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd';
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const signer = await provider.getSigner();

                const connect_contract = new ethers.Contract(
                    contractAddress,
                    ForestReserve.abi,
                    signer
                );
                setContract(connect_contract);
            } else {
                console.error('MetaMask is not installed or not available.');
            }
        } catch (error) {
            console.error('Error initializing contract:', error);
        }
    };

    useEffect(() => {
        initializeContract();
    }, []);

    const handleRegisterDevice = async () => {
        try {
            if (!address) {
                alert('Please fill a address');
                return;
            }

            await contract.addDevice(address);
            alert('Transaction successful');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-12 mb-4">
                New device
            </h1>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label
                        onChange={(e) => setAddress(e.target.value)}
                        className=" text-white py-1"
                    >
                        Address:
                    </label>
                    <input
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                        placeholder="0x434...4191a"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleRegisterDevice}
                    className="bg-lightgreen w-72 px-6 py-2 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out font-semibold"
                >
                    Register new device
                </button>
            </div>
        </div>
    );
};

export default Device;
