import React, { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    let dataArray = [];
    const Otheraddress = document.querySelector(".address").value;

    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log("Data for other address:", dataArray);
      } else {
        dataArray = await contract.display(account);
        console.log("Data for current account:", dataArray);
      }
    } catch (e) {
      alert("You don't have access or something went wrong.");
      console.error(e);
      return;
    }

    // Ensure dataArray is unique
    const uniqueData = [...new Set(dataArray)];

    if (uniqueData.length > 0) {
      const images = uniqueData.map((item, i) => {
        // Ensure it has proper https:// prefix
        const url = item.startsWith("http")
          ? item
          : `https://gateway.pinata.cloud/ipfs/${item.replace("ipfs://", "")}`;

        return (
          <a href={url} key={i} target="_blank" rel="noopener noreferrer">
            <img src={url} alt={`uploaded-${i}`} className="image-list" />
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      />
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;
