import Image from 'next/image';
import React, { useState } from "react";
import axios from 'axios';
import gql from "graphql-tag";

const Outputs = () => {

    const [answer, setAnswer] = useState('Click in the button bellow')

	return (
        <div>
        <h1 className='text-white font-bold text-3xl flex justify-center mt-8 mb-4'>Output</h1>
        <div className='flex justify-around'>
            <div className='flex flex-col  items-center justify-center'>
                <div className='flex items-center'>
                    <h1 className='text-white mt-2 w-72 text-center'>Result: {answer}</h1>
                </div>
                <button 
                //onClick={handleAuxiliarContracts}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request Auction State</button>
                
            </div>
        </div>
    </div>
	);
};

export default Outputs;
