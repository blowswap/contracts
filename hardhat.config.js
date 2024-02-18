require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const {PKEY}  = require('dotenv').config().parsed;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {version: "0.4.18", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.5.16", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.6.6", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.6.12", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.8.12", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.8.18", settings: {optimizer: {enabled: true, runs: 200}}}
    ]
  },
  etherscan: {
    apiKey: {
      blast_sepolia: "blast_sepolia", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "blast_sepolia",
        chainId: 168587773,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/168587773/etherscan",
          browserURL: "https://testnet.blastscan.io"
        }
      }
    ]
  },
  networks:{
    blast_sepolia:{
      url:`https://sepolia.blast.io`,
      accounts:[PKEY]
    }
  }
};
