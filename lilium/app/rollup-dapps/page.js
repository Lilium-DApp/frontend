'use client';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';
import ForestReserve from '@/abis/ForestReserve'
import Link from 'next/link';



const rollupDapps = () => {

    const [auction, setAuction] = useState('');
    const [verifier, setVerifier] = useState('');
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


    const handleRollupDappsAddress = async () => {
        try {
            if (!auction|| !verifier){
                alert('Please fill in all fields.');
                return;
            }
        
            await contract.setCartesiMachines(
                    auction, verifier
            );
            console.log('Transaction successful');
        } catch (error) {
            console.error('Error creating auction:', error);
        }
    }

    return (
        <div>
            <div className='ml-48 my-8'>
                <div className='w-1/2 min-h-1/2 p-4 pb-12 bg-darkgreen rounded-lg'>
                <div>
            <div className='flex items-center justify-center'>
                <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4 mr-4">
                Rollup DApp Addresses 
                </h1>
                <div className='flex items-center'>
                <Link className='rounded-full bg-lightgreen font-bold h-6 w-6 flex items-center justify-center hover:scale-110 duration-300 mt-4' href='https://gist.github.com/henriquemarlon/6ed36a81b1507d977cacb1870abacc18#rollup-dapp-addresses-section-' target="_blank">i</Link>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">    
                <div className='flex flex-col'>
                    <label className=" text-white">Auction Rollup Address:</label>
                    <input
                        placeholder='0x434...4191a'
                        onChange={(e) => setAuction(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className='flex flex-col'>
                    <label className=" text-white">Verifier Rollup Address:</label>
                    <input
                        placeholder='0x434...4191a'
                        onChange={(e) => setVerifier(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleRollupDappsAddress}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Send
                </button>
            </div>
        </div>  
                    
                </div>
            </div>
            < br />
            <Image
                className="bottom-0 right-0  -z-10 fixed"
                src={logo}
                alt="logo"
                width="400"
                height="400"
            /> 
        </div>
    );
};

export default rollupDapps;
