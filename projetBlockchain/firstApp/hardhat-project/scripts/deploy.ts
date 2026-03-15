import hre from "hardhat";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// ✅ Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const { ethers } = await hre.network.connect();

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello = await HelloWorld.deploy();
  await hello.waitForDeployment();

  const address = await hello.getAddress();
  console.log("Deployed to:", address);

  const artifact = await hre.artifacts.readArtifact("HelloWorld");

  const output = {
    address,
    abi: artifact.abi,
  };

  const outPath = path.resolve(__dirname, "../../react-app/src/HelloWorld.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log("ABI + address written to:", outPath);
}

main();