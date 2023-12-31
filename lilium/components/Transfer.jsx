import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CarbonCredit from '@/abis/CarbonCredit';
import Link from 'next/link';

const Transfer = () => {
    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState('');
    const [contract, setContract] = useState('');


    const initializeContract = async () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                const contractAddress =
                    '0x4b47585C0c287d5d2929DC1ab1820844cd2E720D'; 
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const transation_signer = await provider.getSigner();

                const connect_Contract = new ethers.Contract(
                    contractAddress, 
                    CarbonCredit.abi, 
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


    const handleTransfer = async () => {
        try {
            if (!amount | !address){
                alert('Please fill in all fields.');
                return;
            }
            
            const result = amount * 100
            
            await contract.transfer(
                address, result
            );

            alert('Transaction successful');
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div>
            <div className='flex items-center justify-center'>
                <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4 mr-4">
                Transfer tokens
                </h1>
                <div className='flex items-center'>
                <Link className='rounded-full bg-lightgreen font-bold h-6 w-6 flex items-center justify-center hover:scale-110 duration-300 mt-4' href='https://gist.github.com/henriquemarlon/6ed36a81b1507d977cacb1870abacc18#transfer-tokens-section-' target="_blank">i</Link>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <label className=" text-white py-1">Amount:</label>
                    <input
                        placeholder='100'
                        onChange={(e) => setAmount(e.target.value)}
                        type='number'
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <label className=" text-white py-1">Address:</label>
                    <input
                        placeholder='0x434...4191a'
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"
                    ></input>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleTransfer}
                    className="bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold"
                >
                    Transfer
                </button>
            </div>
        </div>
    );
};

export default Transfer;
