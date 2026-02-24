import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // 🔹 Handle chain & account change
        window.ethereum.on("chainChanged", () => window.location.reload());
        window.ethereum.on("accountsChanged", () => window.location.reload());

        // 🔹 Ask MetaMask to connect
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        // 🔹 Ensure MetaMask is on Hardhat Localhost (31337)
        const network = await provider.getNetwork();
        if (network.chainId !== 31337) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x7A69" }], // 31337 in hex
            });
          } catch (error) {
            // If not added, request to add
            if (error.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x7A69",
                    chainName: "Hardhat Localhost",
                    rpcUrls: ["http://127.0.0.1:8545/"],
                    nativeCurrency: {
                      name: "ETH",
                      symbol: "ETH",
                      decimals: 18,
                    },
                  },
                ],
              });
            }
          }
        }

        // 🔹 Use deployed contract address (update after each `npx hardhat node`)
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace dynamically
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );

        console.log("Contract loaded:", contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("MetaMask is not installed!");
      }
    };

    loadProvider();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract} provider={provider}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>G-DRIVE</h1>

        {/* 🔹 Fixed class → className */}
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>

        <FileUpload account={account} provider={provider} contract={contract} />
        <Display contract={contract} account={account} />
      </div>
    </>
  );
}

export default App;
