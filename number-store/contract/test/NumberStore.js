const { expect } = require("chai");
const hre = require("hardhat");

describe("Number Game", () => {

    it("Deploy", async () => {
        const NumberStore = await hre.ethers.getContractFactory("NumberStore");
        const numberStore = await NumberStore.deploy();
        await numberStore.deployed();
        console.log(numberStore);
    });

    it("Get current number", async () => {
        const NumberStore = await hre.ethers.getContractFactory("NumberStore");
        const numberStore = await NumberStore.deploy();
        await numberStore.deployed();
        expect(await numberStore.getNumber()).to.equal(0);
    });

    it("Get number of updates", async () => {
        const NumberStore = await hre.ethers.getContractFactory("NumberStore");
        const numberStore = await NumberStore.deploy();
        await numberStore.deployed();
        expect(await numberStore.getNumOfUpdates()).to.equal(0);
    });


    it("Update Number", async () => {
        const [owner] = await ethers.getSigners();
        const NumberStore = await hre.ethers.getContractFactory("NumberStore");
        const numberStore = await NumberStore.deploy();
        await numberStore.deployed();
        expect(await numberStore.setNumber(10)).to.emit(numberStore, "Update").withArgs(owner, 10);
        expect(await numberStore.getNumber()).to.equal(10);
    });

});