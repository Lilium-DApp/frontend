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
        The Certifier page interacts with the contract "https://sepolia.etherscan.io/address/0x10c0075ef95cc8ed31807600d379c05100dc27ad," which has the function of creating new companies (this contract serves as a company factory).
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Company</h3>
        <p>
        The Company page interacts with the contract "https://sepolia.etherscan.io/address/0x862260cb4b0c908c04389664eb395a144c7840bf." Here, you can mint new tokens and create new auctions for previously minted tokens.
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Bid</h3>
        <p>
        The Bid page interacts with the contract "https://sepolia.etherscan.io/address/0x862260cb4b0c908c04389664eb395a144c7840bf". Here, you can place a new bid on tokens currently in auction.
        </p>
        <h3 className="text-xl my-2 font-bold mt-6">Token</h3>
        <p>
        The Token page interacts with the contract "https://sepolia.etherscan.io/address/0x7d539a6773c550a8e308bbc3a2e68d6326dfe14b." In this page, you can retire tokens to offset carbon footprint or transfer them to other wallets.
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
