# BlockWatch
BlockWatch is a blockchain explorer application similar to Etherscan, allowing users to view Ethereum blockchain transactions in real-time. Users can search for specific transactions using transaction hashes and view detailed information including value, transaction fee, gas fees, and gas limit for any transaction or block.

## Main Page 
![image](https://github.com/Jp88Programmer/blockwatch/assets/88284160/4d140e2c-21ff-443e-b476-b0a5faaaec61)

## Specific Transaction block
![image](https://github.com/Jp88Programmer/blockwatch/assets/88284160/e310631e-e69b-488f-898e-45683adc2290)

## Features
Real-time Transaction Monitoring: View the latest transactions on the Ethereum blockchain in real-time.

- Transaction Search: Search for specific transactions using transaction hashes.
Detailed Transaction Information: Get comprehensive details about transactions including value, transaction fee, gas fees, and gas limit.
- Tech Stack
   - Next.js: A React framework for building server-side rendered applications.
   - Material-UI: A popular React UI framework for implementing Google's Material Design.
   - Moralis API: A powerful and flexible API for interacting with blockchain data.

## Installation
To run BlockWatch locally, follow these steps:


1. ### Clone the repository:
```
git clone https://github.com/Jp88Programmer/blockwatch.git
cd blockwatch
```

2. ### Install dependencies:

```
npm install
```

### Run the development server:
```
npm run dev
```

Open your browser and navigate to http://localhost:3000 to see the application in action.

## Usage
- Home Page
The home page displays the latest transactions on the Ethereum blockchain.
Each transaction includes details such as the transaction hash, block number, age, sender address, receiver address, value, and transaction fee.
- Transaction Details
Click on any transaction hash from the home page to view detailed information about that transaction.
The detailed view includes:
    - Hash: Unique identifier of the transaction.
    - Block: Block number in which the transaction is included.
    - From: Sender address.
    - To: Receiver address.
    - Value: Amount of Ether transferred.
    - Transaction Fee: Total fee paid for the transaction.
    - Gas Fees: Amount of gas used for the transaction.
    - Gas Limit: Maximum amount of gas allowed for the transaction.

## Contributing
We welcome contributions to improve BlockWatch. To contribute:

## Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
Push to the branch
