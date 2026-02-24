import React from "react";
import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract, provider }) => {
  const sharing = async () => {
    try {
      const address = document.querySelector(".address").value.trim();
      if (!address) {
        alert("Please enter a valid address");
        return;
      }

      if (!provider) {
        throw new Error("Provider is not available. Pass provider from App.js");
      }

      // Get signer and connect contract
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);

      const tx = await contractWithSigner.allow(address);
      await tx.wait();

      alert(`Access granted to: ${address}`);
      setModalOpen(false);
    } catch (err) {
      console.error("Error while sharing access:", err);
      alert("Failed to grant access. Check console for details.");
    }
  };

  useEffect(() => {
    const accessList = async () => {
      try {
        const addressList = await contract.shareAccess();
        let select = document.querySelector("#selectNumber");

        // Clear old options
        select.innerHTML = "";

        // Add placeholder
        let placeholder = document.createElement("option");
        placeholder.textContent = "People With Access";
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);

        addressList.forEach((opt) => {
          let e1 = document.createElement("option");
          e1.textContent = opt;
          e1.value = opt;
          select.appendChild(e1);
        });
      } catch (err) {
        console.error("Error fetching access list:", err);
      }
    };

    if (contract) {
      accessList();
    }
  }, [contract]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">Share with</div>
        <div className="body">
          <input
            type="text"
            className="address"
            placeholder="Enter Address"
          />
        </div>
        <form id="myForm">
          <select id="selectNumber" defaultValue="">
            <option value="" disabled>
              People With Access
            </option>
          </select>
        </form>
        <div className="footer">
          <button
            onClick={() => setModalOpen(false)}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={sharing}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
