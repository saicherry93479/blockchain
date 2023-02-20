const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",    
      // Any network (default: none)
     },
  },
  solc: {
    version: "0.6.0",
    optimizer: {
      enabled: true,
      // runs: 200,
    },
  },
};
