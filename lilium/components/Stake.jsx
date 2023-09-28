import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ForestReserve from '@/abis/ForestReserve'


const Stake = () => {
    const [amount, setAmount] = useState('');    
    const [contract, setContract] = useState('');


    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd'; 
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const transation_signer = await provider.getSigner();

                const connect_Contract = new ethers.Contract(
                    contractAddress, 
                    ForestReserve.abi, 
                    transation_signer
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


    const handleStake = async () => {
        try {
            if (!amount){
                alert('Please fill in all fields.');
                return;
            }
        
            await contract.stake(
                    amount
            );
            console.log('Transaction successful');
        } catch (error) {
            console.error('Error creating auction:', error);
        }
    }

    return (
        <div>
            <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4">
            Stake Carbon Credits
            </h1>
            <div className="flex justify-around">
                <div className='flex flex-col'>
                    <label className=" text-white py-1">Amount:</label>
                    <input
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleStake}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Stake
                </button>
            </div>
        </div>
    );
};

export default Stake;