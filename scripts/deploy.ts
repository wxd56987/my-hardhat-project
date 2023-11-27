import { ethers } from "hardhat";

async function main() {
  const myContract = await ethers.deployContract("MyContract");

  await myContract.waitForDeployment();

  console.log(
    `MyContract deployed to ${myContract.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
