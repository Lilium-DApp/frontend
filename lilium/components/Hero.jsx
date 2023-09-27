import heroPic from 'public/assets/hero-img.svg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div id="hero" className="flex justify-around mt-16 mb-40 mx-10">
			<div className="flex flex-col justify-center w-[40%]">
				<h1 className="text-6xl font-bold mb-2 leading-tight">
					Enhancing  
					<br />
					Carbon Market
					<br />
					Transparency
				</h1>
				<p className="text-md mt-5">
				Uncover the innovative fusion of IoT, AI, and blockchain technologies, redefining the carbon credit landscape. At Lilium, we bring transparency, integrity, and accountability to environmental initiatives looking to offset their carbon footprint.

				</p>
				<br />
				<p className="text-md">
				Our carbon credits are a mark of quality, delivering tangible and measurable environmental benefits. Watch the transformation unfold before your eyes: track progress, take meaningful action, and make a lasting impact on our planet. Join us on the journey toward a greener, more sustainable future!
				</p>
			</div>
			<div className="ml-12">
				<Image
					src={heroPic}
					alt="logo"
					width={900}
					height={900}
					className=""
				/>
			</div>
		</div>
	);
};

export default Hero;
