const { Blockchain, Transaction } = require("./blockchain.js");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "d37a83b0e26b547ae977b14725ff6a15d2393e99a0bd8f2f2773edac54c6f241"
);
const myWalletAddress = myKey.getPublic("hex");

let hyruCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
hyruCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
hyruCoin.minePendingTransactions(myWalletAddress);

console.log("Balance: ", hyruCoin.getBalanceOfAddress(myWalletAddress));

console.log("Is chain valid?", hyruCoin.isChainValid());

console.log("\nStarting the miner again...");
hyruCoin.minePendingTransactions(myWalletAddress);

console.log("Balance: ", hyruCoin.getBalanceOfAddress(myWalletAddress));

console.log(JSON.stringify(hyruCoin, null, 4));
