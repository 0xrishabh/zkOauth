import { Contract } from "ethers"
import { task, types } from "hardhat/config"

task("deploy", "Deploy contract")
    .addOptionalParam<boolean>("logs", "Print the logs", true, types.boolean)
    .setAction(async ({ logs }, { ethers }): Promise<Contract> => {
        const VerifierContract = await ethers.getContractFactory("Verifier")
        const verifier = await VerifierContract.deploy()
        await verifier.deployed()
        logs && console.log(`Verifier contract has been deployed to: ${verifier.address}`)

        const Hash = await ethers.getContractFactory('PoseidonT3')
        const hash = await Hash.deploy()
        await hash.deployed()
        logs && console.log(`PoseidonT3 contract has been deployed to: ${hash.address}`)

        // Deploy IncrementalBinaryTree
        const IncrementalBinaryTree = await ethers.getContractFactory('IncrementalBinaryTree', {
            libraries: {
                PoseidonT3: hash.address,
            },
        })
        const incrementalBinaryTree = await IncrementalBinaryTree.deploy()
        await incrementalBinaryTree.deployed()
    

        const ZkOauth = await ethers.getContractFactory("ZkOauth", {
            libraries: {
                IncrementalBinaryTree: incrementalBinaryTree.address
            }
        })
        const zkOauth = await ZkOauth.deploy(verifier.address)
        await zkOauth.deployed()
        console.log(zkOauth.address)

        return zkOauth
    })


