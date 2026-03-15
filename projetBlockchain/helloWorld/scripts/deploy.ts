// deploy.ts — Solution Hardhat 3 native
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorldModule", (m) => {
  const helloWorld = m.contract("HelloWorld");
  return { helloWorld };
});