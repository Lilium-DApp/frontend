import Image from 'next/image';
import howWorksPic from 'public/assets/how-works.svg';

const HowItWorks = () => {
	return (
		<div className="flex flex-row justify-between bg-darkgreen text-white" id="how-it-works">
			<Image className="my-[2%] mx-[4%]" src={howWorksPic} alt="logo" width="400" height="400" />

			<div className="my-[2%] mr-[4%]">
				<h1 className="text-6xl font-bold mb-2 leading-tight mt-[5%]">How it works</h1>
				<p className="my-[1%]">
					Discover an extraordinary way to make a positive impact on our planet! At Lilium, we're changing the game in the carbon credit market. Our IoT devices enable carbon-emitting companies to monitor forest reserves' temperature and humidity. What's even more remarkable? We leverage artificial intelligence to validate data against ideal regional parameters. When it aligns perfectly, the carbon credit tokens are minted, acknowledging your remarkable efforts. This is genuine, tangible change in action!
				</p>
				<p className='my[1%]'>
					Lilium addresses carbon market challenges by operating as a certifier, employing IoT, Blockchain, and AI technologies. IoT sensors monitor real-time forest conditions and record data securely on the blockchain, complemented by Cartesi's virtual machine for complex operations. Two AI systems detect anomalies and verify IoT device locations. Anomalies trigger inspections, while standards met lead to carbon credit token generation, enabling carbon footprint compensation.
				</p>
				
			</div>
		</div>
	);
};

export default HowItWorks;
