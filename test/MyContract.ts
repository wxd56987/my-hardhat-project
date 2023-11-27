import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyContract", function () {
  it("Should return the new number once it's changed", async function() {
    const MyContract = await ethers.getContractFactory('MyContract')
    const myContract = await MyContract.deploy()
    await myContract.waitForDeployment()

    await myContract.store(22);

    expect(await myContract.retrieve()).to.equal(22);
  })
});
