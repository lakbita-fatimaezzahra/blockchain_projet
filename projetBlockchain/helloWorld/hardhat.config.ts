import "@nomicfoundation/hardhat-ethers"; // ← ajouter cette ligne
import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable, defineConfig } from "hardhat/config";
export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],

  solidity: {
    profiles: {
      default: { version: "0.8.28" },
      production: {
        version: "0.8.28",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    },
  },

  networks: {
    // ── Réseaux simulés locaux ──────────────────────
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },

    // ── Polygon Amoy Testnet ────────────────────────
    polygonAmoy: {
      type: "http",
      chainType: "l1",
      url: configVariable("POLYGON_AMOY_RPC_URL"),
      accounts: [configVariable("PRIVATE_KEY")],
    },

    // ── Polygon Mainnet ─────────────────────────────
    polygon: {
      type: "http",
      chainType: "l1",
      url: configVariable("POLYGON_RPC_URL"),
      accounts: [configVariable("PRIVATE_KEY")],
    },
  },
});