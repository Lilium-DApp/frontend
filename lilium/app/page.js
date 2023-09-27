'use client'
import Hero from '@/components/Hero';
import Image from 'next/image';
import logo from 'public/assets/hero-logo.svg';
import HowItWorks from '@/components/HowItWorks';
export default function Home() {
    return (
        <div className="w-full overflow-hidden scroll-smooth">
            <Hero id="hero" />
            <Image
                src={logo}
                alt="logo"
                className="absolute -z-10 right-0 mt-8 top-[50%] overflow-hidden"
            />
            < HowItWorks id='how-it-works' />
        </div>
    );
}
