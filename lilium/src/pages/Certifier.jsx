import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar"

function Certifier() {
  return (
    <div className="font-monsterrat">
        <Navbar />
      <div className="bg-darkgreen w-5/12 rounded-md ml-40 pt-1 shadow-md pb-4">
        <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
          Register new company
        </h1>
        <div className="flex flex-col text-white items-center ">
          <div className="py-2  flex flex-col">
            <label>Company Name: </label>
            <input type="text " className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          <div className="py-2  flex flex-col">
            <label>Country: </label>
            <input type="text " className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          <div className="py-2 flex flex-col">
            <label>Industry: </label>
            <input type="text "  className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>Allowance: </label>
            <input type="text " className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>Compensation: </label>
            <input type="text " className="text-darkgreen rounded focus:outline-none w-96" />
          </div>
          <div className="py-2 flex flex-col">
            <label>Agent: </label>
            <input type="text "  className="text-darkgreen rounded focus:outline-none w-96"/>
          </div>
          <div className="py-2 flex flex-col">
            <label>CID: </label>
            <input type="file" className="w-96"/>
          </div>
          <button className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96" >Send</button>
        </div>
      </div>

      <img src={logo} className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	" />
    </div>
  );
}

export default Certifier;
