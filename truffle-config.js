const HDWalletProvider = require("@truffle/hdwallet-provider");
const { PRIVATE_KEY, MIGRATION_DIRECTORY, GAS_PRICE, BSCSCAN_KEY } = require("config");

const gasPrice = GAS_PRICE * 10 ** 9;

module.exports = {
  migrations_directory: MIGRATION_DIRECTORY,
  networks: {
    development: { host: "127.0.0.1", network_id: "*", port: 8545, confirmations: 0, skipDryRun: true, gasPrice },
    bsctestnet: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, "https://data-seed-prebsc-1-s1.binance.org:8545"),
      network_id: 97,
      confirmations: 3,
      skipDryRun: true,
      gasPrice,
    },
    bscmainnet: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, "https://bsc-dataseed.binance.org"),
      network_id: 56,
      confirmations: 3,
      skipDryRun: true,
      gasPrice,
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
      docker: false,
      settings: { optimizer: { enabled: true, runs: 200 }, evmVersion: "istanbul" },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: { bscscan: BSCSCAN_KEY },
};
