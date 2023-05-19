const hre = require("hardhat");

const main = async () => {
    const NumberStore = await hre.ethers.getContractFactory("NumberStore");
    const numberStore = await NumberStore.deploy();
    await numberStore.deployed();
    console.log(`Deployed Number game at ${numberStore.address}`);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();

// 0x5fbdb2315678afecb367f032d93f642f64180aa3