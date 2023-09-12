import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="m-12 w-1/2">
        <h1 className="text-xl my-2">
        Welcome to Lilium's MVP. Here, 4 pages have been created to interact with the contracts established.
        </h1>
        <h2 className="text-xl my-2">
        In the menu above, you can access the created pages, with each one serving the following functionality:
        </h2>
        <h3 className="text-xl my-2 font-bold mt-6">Certifier</h3>
        <p>
        The Certifier page interacts with the contract "https://sepolia.etherscan.io/address/0x6407e900164e5a0f4282fba66de9232cb37c8bba," which has the function of creating new companies (this contract serves as a company factory).
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Company</h3>
        <p>
        The Company page interacts with the contract "https://sepolia.etherscan.io/address/0xD5a08Cc53bE0205323CA83C66C22A13E09b93130." Here, you can mint new tokens and create new auctions for previously minted tokens.
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Bid</h3>
        <p>
        The Bid page interacts with the contract "https://sepolia.etherscan.io/address/0xD5a08Cc53bE0205323CA83C66C22A13E09b93130". Here, you can place a new bid on tokens currently in auction.
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Transfer</h3>
        <p>
        The transfer page interacts with the contract https://sepolia.etherscan.io/address/0xD5a08Cc53bE0205323CA83C66C22A13E09b93130. It allows you to send minted tokens to other wallets.
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Retire</h3>
        <p>
        The retire tokens page interacts with the contract https://sepolia.etherscan.io/address/0x7470d3f1f5e7a747bd1b143a5748c0eaaa3d27a2. It allows you to retire tokens to offset carbon footprint.
        </p>

      </div>

      <img
        src={logo}
        className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	"
      />
    </div>
  );
}

export default Home;
