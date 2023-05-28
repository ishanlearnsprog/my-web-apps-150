const hre = require("hardhat");

const main = async () => {
    const WarrantyCard = await hre.ethers.getContractFactory("WarrantyCard");
    const warrantyCard = await WarrantyCard.deploy();
    await warrantyCard.deployed();
    console.log(`Deployed Number game at ${warrantyCard.address}`);
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