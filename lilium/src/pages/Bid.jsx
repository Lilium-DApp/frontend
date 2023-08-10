import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

function Certifier() {
  return (
    <div className="font-monsterrat">
      <Navbar />
      <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 shadow-md pb-4">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          New bid
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div>
            <div className="py-2  flex flex-col">
              <label>Amount: </label>
              <input
                type="number "
                className="text-darkgreen rounded focus:outline-none w-96"
              />
            </div>
            <div className="py-2  flex flex-col">
              <label>Price per token: </label>
              <input
                type="text "
                className="text-darkgreen rounded focus:outline-none w-96"
              />
            </div>
            <button className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96 mb-8">
              Send
            </button>
          </div>
        </div>
      </div>

      <img
        src={logo}
        className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	"
      />
    </div>
  );
}

export default Certifier;
