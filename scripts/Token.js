const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const toDeploy = async(contractName, params, gasLimit) => {
        const MyContract  = await hre.ethers.getContractFactory(contractName);
        let deployHandle_;

        if(!params || params.length === 0){
            deployHandle_ = await MyContract.connect(deployer).deploy({gasLimit,gasPrice: ethers.utils.parseUnits('10', 'gwei')});
        }else{
            deployHandle_ = await MyContract.connect(deployer).deploy(...params, {gasLimit,gasPrice: ethers.utils.parseUnits('10', 'gwei')});
        }

        //wait the deploy complete
        await deployHandle_.deployed();

        console.log(`deployed to ${contractName} => ${deployHandle_.address}`);
        return deployHandle_;
    };

    const deployHandle = await toDeploy("BlowSwapToken", [], 5000000);
    console.log(`done~`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
