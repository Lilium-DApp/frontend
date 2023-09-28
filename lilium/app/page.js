'use client';
import logo from 'public/assets/swap-logo.svg';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="w-full overflow-hidden scroll-smooth">
            <div className="m-12 w-1/2">
                <h1 className="text-xl my-2">
                    Welcome to Lilium's PoC. Here, some pages have been created
                    to interact with the contracts established.
                </h1>
                <h2 className="text-xl my-2">
                    In the menu above, you can access the created pages, with
                    each one serving the following functionality:
                </h2>
                <h3 className="text-xl my-2 font-bold mt-6">Forest</h3>
                <p>
                The "Forest" page is dedicated to the registration of forests and hardware installed in forest conservation areas. This page is exclusive to the entity Lilium, which acts as the certifying authority. Lilium has the ability to interact with the contract <a className='underline' href='https://sepolia.etherscan.io/address/0x434f1dD7072b0CFc827fea74e57f4983412b191a'>0x434f1dD7072b0CFc827fea74e57f4983412b191a</a> deployed on the Ethereum testnet, Sepolia.
                </p>
                <h3 className="text-xl my-2 font-bold mt-6">Rollup DApps</h3>
                <p>
                The "Rollup DApps Addresses" page is designed to inform the verifier and auction addresses about interacting with the Forest Reserve contract. The contract in question is <a className='underline' href='https://sepolia.etherscan.io/address/0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd'>0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd</a>, which has been deployed on the Ethereum testnet known as Sepolia.
                </p>
                <h3 className="text-xl my-2 font-bold mt-6">IoT Simulation</h3>
                <p>
                The "IoT Simulation" page was created with the purpose of simulating data sent by hardware, including temperature, humidity, CO (carbon monoxide) information, and images that can be captured by a camera. Furthermore, it provides the option to verify the outputs returned by the Cartesi Machine, both the image with tree detection and whether the sensor data matches the expected values according to normal forest standards. The contract being interacted with is the <a className='underline' href='https://sepolia.etherscan.io/address/0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd'>0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd</a>, which has been deployed on the Ethereum testnet called Sepolia.
                </p>
                <h3 className="text-xl my-2 font-bold mt-6">Auction</h3>
                <p>
                The "Auction" page is primarily intended to provide auction-related features. On this page, you can initiate an auction, place bids, make bets, and stake tokens (this operation mints carbon credit to the contract, linking the staked amount to the agent who made the function call. As a consequence, the agent can initiate an auction.). Furthermore, it allows you to check the outputs from the Cartesi Machine to obtain information about the current state of the auction.  The contract being interacted with is the <a className='underline' href='https://sepolia.etherscan.io/address/0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd'>0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd</a>, which has been deployed on the Ethereum testnet called Sepolia.
                </p>
                <h3 className="text-xl my-2 font-bold mt-6">Offset Carbon Tokens</h3>
                <p>
                The 'Offset Carbon Tokens' page provides features that allow you to withdraw tokens from the contract, transfer tokens to other wallets, and retire tokens to offset your carbon footprint. The 'Withdraw' function interacts with the contract <a className='underline' href='https://sepolia.etherscan.io/address/0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd'>0xb756A79Ff38E1B7976f0CbEe52873a2f46407cdd</a>, while the 'Transfer' and 'Retire' functions interact with the contract <a className='underline' href='https://sepolia.etherscan.io/address/0x4b47585C0c287d5d2929DC1ab1820844cd2E720D'>0x4b47585C0c287d5d2929DC1ab1820844cd2E720D</a>, both of which are deployed on Sepolia.
                </p>
            </div>
            <Image
                className="bottom-0 right-0  -z-10 fixed"
                src={logo}
                alt="logo"
                width="400"
                height="400"
            />
        </div>
    );
}
