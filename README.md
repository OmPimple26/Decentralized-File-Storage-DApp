# Decentralized-File-Storage-DApp

🚀 Decentralized File Storage DApp built using Solidity, Ethereum, React, and IPFS. Users can securely upload files to IPFS while ownership and access control are managed via smart contracts on the blockchain 🔐. Supports wallet authentication, file sharing, and on-chain permission management for secure &amp; transparent storage 🌐📁.

---

## 🌟 Features

- 🔐 Wallet-based authentication using MetaMask
- 📁 Upload files to IPFS (decentralized storage)
- ⛓ Store file hashes on Ethereum blockchain
- 👤 Owner-based file management
- 🤝 Grant access to specific wallet addresses
- ❌ Revoke access anytime
- 🛡 On-chain authorization (secure & tamper-proof)

---

## 🏗 Architecture

```
Frontend (React)  
⬇  
Smart Contract (Solidity)  
⬇  
Ethereum Blockchain  
⬇  
IPFS (File Storage)
```

---

## 🛠 Tech Stack

- Solidity
- Hardhat
- Ethereum
- React.js
- Ethers.js
- IPFS
- Pinata
- MetaMask

---

## 📂 Project Structure

```
├── contracts/
│   └── Upload.sol
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Display.css
│   │   │   ├── Display.js
│   │   │   ├── FileUpload.css
│   │   │   ├── FileUpload.js
│   │   │   ├── Modal.css
│   │   │   └── Modal.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── scripts/
│   └── deploy.js
├── test/
│   └── Lock.js
├── .gitignore
├── hardhat.config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

## 🔄 How It Works

1. User connects wallet via MetaMask.
2. File is uploaded to IPFS.
3. IPFS returns a unique hash.
4. Hash is stored on blockchain via smart contract.
5. Owner can grant/revoke access.
6. Smart contract verifies permissions before displaying files.

---

## 🖼 Screenshots

### 🔹 G-DRIVE UI 

<img width="1898" height="864" alt="G-DRIVE UI Blockchain Technology" src="https://github.com/user-attachments/assets/d383e4b1-3a8e-4d08-a34d-a1dcae712cb6" />

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/OmPimple26/Decentralized-File-Storage-DApp.git
cd Decentralized-File-Storage-DApp
```

### 2️⃣ Install Dependencies

> Backend (Hardhat):

```
npm install
```

> Frontend:

```
cd frontend
npm install
```

---

### 3️⃣ Run Local Blockchain

```
npx hardhat node
```

---

### 4️⃣ Deploy Smart Contract

```
npx hardhat run --network localhost scripts/deploy.js
```

---

### 5️⃣ Start Frontend

```
cd frontend
npm start
```

---

## 🔐 Security Design

- Files stored off-chain to reduce gas cost
- Only file hashes stored on-chain
- Access control enforced by smart contract
- Unauthorized users cannot access files

---

## 🎯 Learning Outcomes

- Smart contract development in Solidity
- Blockchain interaction using Ethers.js
- IPFS integration
- Wallet authentication
- On-chain permission management
- Full-stack Web3 DApp architecture

---

## 📌 Future Improvements

- Deploy to testnet (Sepolia / Polygon)
- Add file encryption before IPFS upload
- Add event logs for activity tracking
- Improve UI/UX
- Add gas optimization

---

## 👨‍💻 Author

Om Pimple  
Machine Learning & Full-Stack Developer

---

## 📜 License

This project is for educational and learning purposes.
