'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';
import Withdraw from '@/components/Withdraw';
import Transfer from '@/components/Transfer';
import Retire from '@/components/Retire';



const offsetCarbonTokens = () => {

    const [type, setType] = useState('withdraw');

    return (
        <div>
            <div className='ml-48 mt-8'>
                <div className='w-1/2 min-h-1/2 p-4 pb-12 bg-darkgreen rounded-lg'>
                    <div className='flex justify-center py-2 gap-4'>
                        <button className='bg-lightgreen w-64 py-3 rounded-lg mt-2 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('withdraw')}>Withdraw</button>
                        <button className='bg-lightgreen w-64 py-3 rounded-lg mt-2 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('transfer')}>Transfer</button>
                        <button className='bg-lightgreen w-64 py-3 rounded-lg mt-2 hover:bg-white hover:text-black duration-300 ease-in-out font-bold text-lg' onClick={() => setType('retire')}>Retire</button>
                    </div>
                    {type === 'withdraw' && (
                         < Withdraw />
                    )}
                    {type == 'transfer' && (
                        < Transfer />
                    )}
                    {type == 'retire' && (
                        < Retire />
                    )}
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

export default offsetCarbonTokens;
