require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const {blast_sepolia_private_key} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {version: "0.6.12", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.8.12", settings: {optimizer: {enabled: true, runs: 200}}},
      {version: "0.8.18", settings: {optimizer: {enabled: true, runs: 200}}}
    ]
  },
  networks:{
    blast_sepolia:{
      url:`https://sepolia.blast.io`,
      accounts:[blast_sepolia_private_key]
    }
  }
};
