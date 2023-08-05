const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const NFT = await hre.ethers.getContractFactory("police_cop");

  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("police cop NFT contract deployed to:", nft.address);

  fs.writeFileSync(
    "metadata/contractAddress.js",
    `
    export const nftAddress = "${nft.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
