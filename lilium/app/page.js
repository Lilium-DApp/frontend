'use client';
import Gist from '../components/Gist';
import Image from 'next/image';
import logo from 'public/assets/swap-logo.svg';

export default function Home() {
    return (
        <div className="w-full h-[90%] overflow-hidden scroll-smooth">
            <div className="m-12 w-1/2 ">
                <Gist />
            </div>
            <Image
                className="bottom-0 right-0 -z-10 fixed"
                src={logo}
                alt="logo"
                width="400"
                height="400"
            />
        </div>
    );
}

