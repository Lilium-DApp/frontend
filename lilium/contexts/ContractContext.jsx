import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import CarbonCredit from '@/abis/CarbonCredit'
import { useMetaMask } from '@/contexts/WalletContext';

const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [contractBalance, setContractBalance] = useState(0);
    const { account } = useMetaMask();

    const fetchContractBalance = async () => {
        if (contract) {
            await getContractBalance();
        }
    };

    useEffect(() => {
        async function initContract() {
            try {
                const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
    
                const signer = ethProvider.getSigner();
    
                const contractAddress = '0x4b47585C0c287d5d2929DC1ab1820844cd2E720D';
                const contractABI = CarbonCredit.abi; 
    
                const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
    
                setProvider(ethProvider);
                setContract(contractInstance);

            } catch (error) {
                console.error('Error initializing contract:', error);
            }
        }
    
        async function fetchData() {
            if (window.ethereum) {
                await initContract();
                await fetchContractBalance();
            }
        }
    
        fetchData();
    }, [account]);

    const getContractBalance = async () => {
        try {
            const balance = await contract.balanceOf(account);
            setContractBalance(balance / 100);
        } catch (error) {
            console.error('Error fetching contract balance:', error);
        }
    };

    
    const contextValue = {
        contract,
        provider,
        contractBalance
    };

    return <ContractContext.Provider value={contextValue}>{children}</ContractContext.Provider>;
};

export const useContract = () => {
    return useContext(ContractContext);
};