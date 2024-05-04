# Simple Blockchain Implementation

This is a simple blockchain implementation created to explore the basic concepts of blockchain networks. The implementation includes classes for blocks, transactions, a blockchain chain, and a wallet.

![image](https://github.com/alexindevs/simple-blockchain/assets/122297619/f862bf66-48a9-48ee-af02-f22b1bc4c8aa)


## Features

- **Block**: Represents a block in the blockchain. Each block contains a nonce, a previous hash, transactions, and a timestamp. The nonce is a random number used in the mining process.
- **Transaction**: Represents a transaction between two parties. Each transaction contains an amount, a payee, and a payer.
- **Chain**: Represents the blockchain itself. It includes methods for creating the genesis block, getting the latest block, mining new blocks, and adding blocks to the chain.
- **Wallet**: Represents a digital wallet. Each wallet has a balance, a public key, and a private key. It includes a method for sending money (creating transactions) to other wallets.

## How it Works

1. **Genesis Block Creation**: The blockchain starts with a genesis block, which is the initial block in the chain. This block contains a transaction that awards a certain amount of cryptocurrency to a specific wallet (usually the creator of the blockchain).
2. **Transaction Creation**: Users can create transactions by sending money from one wallet to another. Each transaction is signed with the sender's private key to ensure its authenticity.
3. **Mining**: When a new transaction is created, it needs to be added to a block and added to the blockchain. This process is called mining. Mining involves finding a nonce that, when combined with the block data, produces a hash with a specific pattern (in this case, starting with four zeros). This requires computational power and is designed to be difficult to achieve but easy to verify.
4. **Adding Blocks to the Chain**: Once a valid nonce is found, the new block is added to the blockchain, and the transaction is considered confirmed.

## Usage

To use this implementation, follow these steps:

1. Install Node.js if you haven't already.
2. Clone this repository to your local machine.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. Run `tsc; npm start` to start the application.
5. Explore the code and experiment with creating transactions, mining blocks, and observing the blockchain.

## Credits

This implementation was inspired by a Fireship video on blockchain technology.

## Disclaimer

This is a simplified implementation intended for educational purposes only. It does not include many of the features and security measures found in real-world blockchain networks.
