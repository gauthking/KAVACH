
const hre = require("hardhat");

async function main() {


  const Report = await hre.ethers.getContractFactory("Report");
  const report = await Report.deploy();

  await report.deployed();

  console.log(
    `Contract deployed successfully - ${report.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
