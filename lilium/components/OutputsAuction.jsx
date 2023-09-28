import React, { useState } from "react";
import axios from 'axios';
import Link from 'next/link';


const Outputs = () => {

    const [answer, setAnswer] = useState('')
    const [server, setServer] = useState('')

    function hexToString(hex) {
        let string = "";
        for (let i = 0; i < hex.length; i += 2) {
          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return string;
      }

    const handleOutputAuction = async () => {
        try {
          if (!server) {
            console.error("Please fill in all fields.");
            return;
          }
          const header = {"ngrok-skip-browser-warning": "69420"}
          axios.get(server + '/inspect/status',{ headers: header })
          .then(function (response) {
            console.log(response)
            setAnswer(hexToString(response.data["reports"]["0"]["payload"]))
          })
          .catch(function (error) {
            console.error('Erro na requisição:', error);
          });
        
        } catch (error) {
          console.error(error);
        }
      }

	return (
        <div>
        <div className='flex items-center justify-center'>
                <h1 className="text-white font-bold text-3xl flex justify-center mt-8 mb-4 mr-4">
                Outputs 
                </h1>
                <div className='flex items-center'>
                <Link className='rounded-full bg-lightgreen font-bold h-6 w-6 flex items-center justify-center hover:scale-110 duration-300 mt-4' href='https://google.com'>i</Link>
                </div>
            </div>
        <div className='flex justify-around'>
            <div className='flex flex-col  items-center justify-center'>
                <input
                  placeholder='Server Manager URL'
                    value={server}
                    type="text" 
                    onChange={(e) => setServer(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"/>
                <button 
                onClick={handleOutputAuction}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request Auction State</button>
                <div>
                    <h1 className='mt-8 text-white font-semibold'>Result:</h1>
                    <p className='text-white mt-2 w-72'>{answer}</p>
                </div>
                
            </div>
        </div>
    </div>
	);
};

export default Outputs;
