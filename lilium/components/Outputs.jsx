import Image from 'next/image';
import React, { useState } from "react";
import axios from 'axios';
import gql from "graphql-tag";
import Link from 'next/link';


const GET_NOTICES = gql`
  query {
    notices {
      edges {
        node {
          index
          input {
            index
          }
          payload
        }
      }
    }
  }
`;

const Outputs = () => {

    const [graphql, setGraphql] = useState('');
    const [server, setServer] = useState('');
    const [answer, setAnswer] = useState("Click in the button above");
    const [payloadImage, setPayloadImage] = useState("");


    function hexToString(hex) {
        let string = "";
        for (let i = 0; i < hex.length; i += 2) {
          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return string;
      }

    const handleAuxiliarContracts = async () => {
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

    const handleLastNotice = async () => {
    const url = graphql + "/graphql";
    const requestOptions = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        query:
            "{ notices(last: 1) { edges { node { index input { index } payload } } } }",
        }),
    };

    fetch(url, requestOptions)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        console.log("Response:", data);

        const hexString = data.data.notices.edges[0].node.payload;
        const regularString = hexToString(hexString);
        const baseString = "data:image/jpeg;base64,";
        const fullString = baseString + regularString;
        const cleanedPayloadImage = fullString.replace(/\0/g, ""); // Replace all null characters with an empty string
        console.log(cleanedPayloadImage)
        setPayloadImage(cleanedPayloadImage);

        })
        .catch((error) => {
        console.error("Error:", error);
        });
    };

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
            <div className='flex flex-col items-center'>
                <h1 className='text-xl text-white font-bold py-1' >Image output</h1>
                <input
                    placeholder='GraphQL Server URL'
                    value={graphql}
                    type="text" 
                    onChange={(e) => setGraphql(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen" />
                <button 
                onClick={handleLastNotice}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request output image</button> 
                <div>
                    <h1 className='mt-8 w-72 text-white font-semibold'>Result:</h1>
                    {payloadImage && <img width="300" src={payloadImage}></img> }
                
                    
                </div>

            </div>
            <div className='flex flex-col  items-center'>
                <h1 className='text-xl text-white font-bold py-1' >Verifier State</h1>
                <input
                  placeholder='Server Manager URL'
                    value={server}
                    type="text" 
                    onChange={(e) => setServer(e.target.value)}
                    className="w-72 h-8 rounded-lg px-4 focus:outline-none text-darkgreen"/>
                <button 
                onClick={handleAuxiliarContracts}
                className='bg-lightgreen w-72 px-2 h-8 py-4 rounded-lg mt-8 hover:bg-white hover:text-black duration-300 ease-in-out flex items-center justify-center font-semibold'>Request sensors output</button>
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
