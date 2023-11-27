import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// const SEPOLIA_RPC_URL =
//   "https://sepolia.infura.io/v3/<key>";
// const PRIVATE_KEY = "<your private key>";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    // sepolia: {
    //   url: SEPOLIA_RPC_URL,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

export default config;
