**# Avengers: The Armory**



**### A Decentralized Superhero Equipment Marketplace**



**\*\*ASSEMBLE. GEAR UP.\*\***



**## 1. Project Overview**



**Avengers: The Armory is an Avengers-themed decentralized application (DApp) built on the Ethereum Sepolia blockchain. It allows users to claim a custom cryptocurrency called Avengers Coin (AVC), purchase virtual superhero equipment, manage their personal inventory and transfer tokens between wallets.**



**The project demonstrates the practical application of blockchain technology, smart contracts, cryptocurrency and decentralized ownership through an interactive marketplace.**



**## 2. Project Objectives**



**- Develop a custom ERC-20 cryptocurrency.**

**- Implement smart contracts using Solidity.**

**- Integrate a web-based interface with the Ethereum blockchain.**

**- Enable decentralized purchases and token transfers.**

**- Demonstrate transparent and verifiable blockchain transactions.**



**## 3. Avengers Coin (AVC)**



**| Property | Details |**

**|---|---|**

**| Token Name | Avengers Coin |**

**| Token Symbol | AVC |**

**| Token Standard | ERC-20 |**

**| Blockchain | Ethereum Sepolia |**

**| Decimals | 18 |**

**| Welcome Reward | 1,000 AVC per wallet |**



**Each wallet can claim 1,000 AVC once. Tokens can be used to purchase virtual equipment or transferred to other Ethereum wallets.**



**Equipment purchases burn the corresponding number of tokens, reducing the total token supply.**



**## 4. Equipment Marketplace**



**| Equipment | Price | Rarity |**

**|---|---:|---|**

**| Captain America's Shield | 100 AVC | Elite |**

**| Thor's Hammer | 200 AVC | Mythic |**

**| Iron Man's Suit | 300 AVC | Legendary |**

**| Hawkeye's Bow | 150 AVC | Elite |**

**| Infinity Gauntlet | 500 AVC | Cosmic |**



**Purchased equipment is recorded on the blockchain and displayed in the user's personal inventory. Equipment ownership is non-transferable.**



**## 5. Smart Contract Functions**



**| Function | Purpose |**

**|---|---|**

**| claimTokens() | Claims the one-time welcome reward of 1,000 AVC. |**

**| buyEquipment() | Purchases superhero equipment using AVC. |**

**| getInventory() | Retrieves equipment owned by a wallet. |**

**| balanceOf() | Displays the token balance of a wallet. |**

**| transfer() | Transfers AVC between wallets. |**

**| totalSupply() | Displays the total circulating token supply. |**



**The smart contract also inherits additional standard ERC-20 functions.**



**## 6. Technologies Used**



**- Solidity — Smart contract development**

**- Ethereum Sepolia — Blockchain test network**

**- Remix IDE — Compilation and deployment**

**- MetaMask — Wallet connection and transaction authorization**

**- Ethers.js — Blockchain and frontend integration**

**- HTML5 — Website structure**

**- CSS3 — Styling, responsiveness and animations**

**- JavaScript — Website functionality**

**- SVG — Custom superhero equipment illustrations**

**- GitHub — Source code repository**



**## 7. System Workflow**



**1. The user connects their MetaMask wallet.**

**2. The website connects to the deployed smart contract on Sepolia.**

**3. The user claims 1,000 AVC.**

**4. The user selects equipment from the marketplace.**

**5. MetaMask requests transaction confirmation.**

**6. The smart contract processes the purchase and burns the spent tokens.**

**7. The website updates the wallet balance and inventory.**

**8. Users can transfer remaining AVC to another wallet.**



**## 8. Deployment Details**



**\*\*Network:\*\* Ethereum Sepolia Testnet**



**\*\*Chain ID:\*\* 11155111**



**\*\*Smart Contract Address:\*\***



**`0xec0d95dc62f0f32A8660Bf6Acbd5185Ef4325846`**



**\*\*Blockchain Explorer:\*\***



**https://sepolia.etherscan.io/address/0xec0d95dc62f0f32A8660Bf6Acbd5185Ef4325846**


**GitHub Repository:** https://github.com/i245589-hash/Avengers-The-Armory



**## 9. Installation and Usage**



**1. Download or clone the project repository.**

**2. Install the MetaMask browser extension.**

**3. Enable the Ethereum Sepolia test network.**

**4. Obtain free Sepolia test ETH for transaction fees.**

**5. Open the frontend folder in Command Prompt.**

**6. Run the following command:**



**```bash**

**python -m http.server 8000**

**```**



**Alternatively, on Windows:**



**```bash**

**py -m http.server 8000**

**```**



**7. Open `http://localhost:8000` in Chrome.**

**8. Connect your MetaMask wallet.**

**9. Claim AVC, purchase equipment or transfer tokens.**



**The smart contract address is already configured in the JavaScript file. Redeployment is not required.**



**## 10. Testing and Results**



**| Test | Expected Result | Status |**

**|---|---|---|**

**| Smart contract compilation | Successful compilation | Passed |**

**| Sepolia deployment | Contract deployed | Passed |**

**| Wallet connection | Wallet address displayed | Passed |**

**| Token claim | Receive 1,000 AVC | Passed |**

**| Equipment purchase | Purchase Thor's Hammer for 200 AVC | Passed |**

**| Balance update | Balance reduced to 800 AVC | Passed |**

**| Inventory update | Thor's Hammer displayed | Passed |**

**| Token transfer | Transfer 100 AVC to another wallet | Passed |**

**| Sender balance | Remaining balance of 700 AVC | Passed |**

**| Token supply | Total supply remains 800 AVC after transfer | Passed |**

**| Blockchain verification | Successful transaction on Etherscan | Passed |**



**Additional edge-case tests include duplicate claims, duplicate purchases, insufficient token balances and rejected transactions.**



**## 11. User Interface and Design**



**The website features a cinematic Avengers-inspired interface with:**



**- Premium black, gold and crimson colour scheme.**

**- Custom superhero equipment illustrations.**

**- Animated marketplace cards.**

**- Futuristic wallet dashboard.**

**- Equipment rarity badges.**

**- Personal inventory and ownership indicators.**

**- Responsive layouts.**

**- Transaction notifications.**



**## 12. Screenshots**



**Project screenshots are included in the screenshots folder:**



**- Homepage**

**- Connected wallet**

**- Equipment marketplace**

**- Personal inventory**

**- Successful blockchain transaction**

**- Smart contract deployment**



**## 13. Security and Limitations**



**- The project operates on a test network.**

**- AVC has no real monetary value.**

**- Sepolia test ETH is required for transaction fees.**

**- Users authorize transactions through MetaMask.**

**- Private keys and wallet recovery phrases must never be shared.**

**- Equipment represents virtual ownership rather than physical products or NFTs.**



**## 14. Conclusion**



**Avengers: The Armory demonstrates how blockchain technology can support a decentralized digital marketplace. By combining ERC-20 tokens, smart contracts and an interactive frontend, the project illustrates transparent transactions, digital ownership, token burning and peer-to-peer transfers.**



**## Disclaimer**



**This project was developed for educational purposes. It is an unofficial Avengers-inspired fan project and is not affiliated with Marvel or Disney.**

