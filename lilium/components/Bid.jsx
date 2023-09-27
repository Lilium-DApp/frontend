import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ForestReserve from '@/abis/ForestReserve'

const Bid = () => {
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [contract, setContract] = useState('');
    const [signer, setSigner] = useState('')

    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd';
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const signer = await provider.getSigner();

                const companyContract = new ethers.Contract(
                    contractAddress, 
                    ForestReserve.abi, 
                    signer
                );
                setContract(companyContract);
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

    const handleNewBid = async () => {
        try {
            if (!amount || !price){
                alert('Please fill in all fields.');
                return;
            }

            const result = amount * price
            console.log(result)

            const final_value = ethers.utils.parseEther(String(result))
            await signer
            await contract.newBid(
                    amount, {
                    value: final_value
                }
            );
            console.log('Transaction successful');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4">
            New bid
            </h1>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label className=" text-white py-1">Amount:</label>
                    <input
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className=" text-white py-1">Price per token:</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleNewBid}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Send bid
                </button>
            </div>
        </div>
    );
};

export default Bid;
