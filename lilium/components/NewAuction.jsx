import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ForestReserve from '@/abis/ForestReserve'

const NewAuction = () => {
    const [amount, setAmount] = useState(0);
    const [duration, setDuratin] = useState(0);
    const [price, setPrice] = useState(0);
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

                const connect_Contract = new ethers.Contract(
                    contractAddress, 
                    ForestReserve.abi, 
                    signer
                );
                setContract(connect_Contract);
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

    const handleNewAuction = async () => {
        try {
            if (!amount || !duration || !price){
                alert('Please fill in all fields.');
                return;
            }
            await contract.newAuction(
                parseInt(amount),
                parseInt(duration),
                parseInt(price)
            );
            alert('Transaction successful');

        } catch (error) {
            console.error('Error creating auction:', error);
        }
    }

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4">
            Create new auction
            </h1>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label className=" text-white py-1">Amount of auction tokens:</label>
                    <input
                        type='number'
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>

                    <label className=" text-white py-1">Duration (hours):</label>
                    <input
                        type='number'
                        onChange={(e) => setDuratin(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className=" text-white py-1">Minumum price:</label>
                    <input
                        type='number'
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleNewAuction}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Start auction
                </button>
            </div>
        </div>
    );
};

export default NewAuction;
