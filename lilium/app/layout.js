'use client';

import NavBar from '@/components/NavBar';
import './globals.css';
import { MetaMaskProvider } from '../contexts/WalletContext';
import { ContractContextProvider } from '../contexts/ContractContext';

import { useState } from 'react';
import { Contract } from 'ethers';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth;">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <MetaMaskProvider>
            <ContractContextProvider>
                
                    <body className="font-montserrat scroll-smooth">
                        <NavBar />
                        {children}
                    </body>
                
               </ContractContextProvider>
               </MetaMaskProvider>
            
        </html>
    );
}
