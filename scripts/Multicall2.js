const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const toDeploy = async(contractName, params) => {
        const MyContract  = await hre.ethers.getContractFactory(contractName);
        let deployHandle_;

        if(!params || params.length === 0){
            deployHandle_ = await MyContract.connect(deployer).deploy({gasLimit: 2400000,gasPrice: ethers.utils.parseUnits('1', 'gwei')});
        }else{
            deployHandle_ = await MyContract.connect(deployer).deploy(...params, {gasLimit: 2400000,gasPrice: ethers.utils.parseUnits('1', 'gwei')});
        }

        //wait the deploy complete
        await deployHandle_.deployed();

        console.log(`deployed to ${contractName} => ${deployHandle_.address}`);
        return deployHandle_;
    };

    const deployHandle = await toDeploy("Multicall2");

    console.log(`address: ${deployHandle.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
