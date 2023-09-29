import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import ForestReserve from '@/abis/ForestReserve'
import Link from 'next/link';

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

    const handleFinishAuction = async () => {
        try {
            await contract.finishAuction();  
            alert('Auction finished');

        } catch (error) {
            console.error('Error creating auction:', error);
        }
    }

    return (
        <div className='divide-y divide-lightgreen'>
            <div>
            <div className='flex items-center justify-center'>
                <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4 mr-4">
                Create new auction
                </h1>
                <div className='flex items-center'>
                <Link className='rounded-full bg-lightgreen font-bold h-6 w-6 flex items-center justify-center hover:scale-110 duration-300 mt-4' href='https://gist.github.com/henriquemarlon/6ed36a81b1507d977cacb1870abacc18#create-new-auction-section-' target="_blank">i</Link>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label className=" text-white py-1">Amount of auction tokens:</label>
                    <input
                        placeholder='1000'
                        type='number'
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>

                    <label className=" text-white py-1">Duration (hours):</label>
                    <input
                        type='number'
                        placeholder='46'
                        onChange={(e) => setDuratin(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className=" text-white py-1">Minumum price:</label>
                    <input
                        type='number'
                        placeholder='200'
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleNewAuction}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold mb-6"
                >
                    Start auction
                </button>
            </div>
            </div>
            <div>
            <div className='flex items-center justify-center'>
                <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4 mr-4">
                Finish auction
                </h1>
                <div className='flex items-center'>
                <Link className='rounded-full bg-lightgreen font-bold h-6 w-6 flex items-center justify-center hover:scale-110 duration-300 mt-4' href='https://gist.github.com/henriquemarlon/6ed36a81b1507d977cacb1870abacc18#finish-auction-section-' target="_blank">i</Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            <button
                    onClick={handleFinishAuction}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Finish auction
                </button>
                </div>
            </div>
        </div>
    );
};

export default NewAuction;
