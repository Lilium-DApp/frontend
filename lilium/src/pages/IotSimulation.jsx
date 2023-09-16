import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import CompanyAbi from "../abis/Company.json";
import { ethers } from "ethers";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

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

function IotSimulation() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [co, setCo] = useState("");
  const [image, setImage] = useState("");
  const [contract, setContract] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [graphQlUrl, setGraphQlUrl] = useState ("");
  const client = new ApolloClient({
    uri: graphQlUrl,
    cache: new InMemoryCache(),
  });
  const { loading, error, data } = useQuery(GET_NOTICES);
  const notices = data?.notices.edges || [];

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result.split(",")[1];

        console.log(base64String);
      };

      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const initializeContract = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const selectedAccount = await signer.getAddress();

        const contractAddress = "0xD5a08Cc53bE0205323CA83C66C22A13E09b93130";

        const companyContract = new ethers.Contract(
          contractAddress,
          CompanyAbi.abi,
          signer
        );

        console.log(companyContract.methods);

        setUserAccount(selectedAccount);
        setContract(companyContract);
      } else {
        console.error("MetaMask is not installed or not available.");
      }
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  useEffect(() => {
    initializeContract();
  }, []);

  const handleSendIotData = async () => {
    try {
      // Ensure all required fields are filled
      if (!temperature || !humidity || !co || !image) {
        console.error("Please fill in all fields.");
        return;
      }

      // Call the 'newAuction' function on your contract
      await contract.verifyRealWorldState({
        temperature: temperature,
        humidity: humidity,
        co: co,
        base64_image: image,
      });

      // Optionally, you can handle success here
      console.log("Successfully sent data.");
    } catch (error) {
      // Handle any errors that may occur during the transaction
      console.error("Error:", error);
    }
  };

  const handleLastNotice = async () => {};

  return (
    <ApolloProvider client={client}>
      <div className="font-monsterrat">
        <Navbar />
        <div className="bg-darkgreen w-4/12 py-12 rounded-md ml-40 shadow-md">
          <div className="flex flex-col text-white items-center divide-y divide-lightgreen">
            <div className="py-4">
              <h1 className="flex font-bold text-white text-2xl m-6 pl-6 justify-center">
                Iot Simulation
              </h1>
              <div className="py-2  flex flex-col">
                <label>Temperature: </label>
                <input
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  type="text"
                  className="text-darkgreen rounded focus:outline-none w-96"
                />
              </div>

              <div className="py-2  flex flex-col">
                <label>Humidity: </label>
                <input
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                  type="text"
                  className="text-darkgreen rounded focus:outline-none w-96"
                />
              </div>

              <div className="py-2 flex flex-col">
                <label>CO: </label>
                <input
                  value={co}
                  onChange={(e) => setCo(e.target.value)}
                  type="text "
                  className="text-darkgreen rounded focus:outline-none w-96"
                />
              </div>

              <div className="py-2 flex flex-col">
                <label>Image: </label>
                <input
                  onChange={handleFileChange}
                  multiple
                  type="file"
                  className="w-96"
                />
              </div>
              <button
                onClick={handleSendIotData}
                className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96"
              >
                Send
              </button>
            </div>
            <div className="w-96 py-4">
              <div className="py-2 flex flex-col">
                <label>GraphQL URL: </label>
                <input
                  value={graphQlUrl}
                  onChange={(e) => setGraphQlUrl(e.target.value)}
                  type="text "
                  className="text-darkgreen rounded focus:outline-none w-96"
                />
              </div>
              <button
                onClick={handleLastNotice}
                className="rounded text-darkgreen bg-lightgreen hover:bg-white duration-300 my-2 py-1 font-bold w-96"
              >
                Last notice / predicition
              </button>
              {notices.map((notice) => (
                <li key={notice.node.index}>{notice.node.payload}</li>
              ))}
            </div>
          </div>
        </div>
        <img
          src={logo}
          className="w-1/3 bottom-0 right-0 -z-10 absolute overflow-hidden	"
        />
      </div>
    </ApolloProvider>
  );
}

export default IotSimulation;
