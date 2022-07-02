import { Strategy, ZkIdentity } from "@zk-kit/identity"
import { generateMerkleProof, Semaphore } from "@zk-kit/protocols"
//import { expect } from "chai"
import { Contract, Signer } from "ethers"
import { ethers, run } from "hardhat"


describe("zkOauth", function () {
    let contract
    let contractOwner

    before(async () => {
        contract = await run("deploy", { logs: false })

        const signers = await ethers.getSigners()
        contractOwner = signers[0]
        //contract.on("MemberAdded", (groupId, commitmentId) => {
        //    console.log(groupId, commitmentId);
        //});
    })

    describe("# greet", () => {
        const wasmFilePath = "./public/semaphore.wasm"
        const finalZkeyPath = "./public/semaphore.zkey"

        it("Should Register", async () => {
            const message = await contractOwner.signMessage("Register: zkOauth")

            const identity = new ZkIdentity(Strategy.MESSAGE, message)
            const identityCommitment = identity.genIdentityCommitment()

            const tx = await contract.addMember(identityCommitment)
            const rc = await tx.wait()

            contract.on("MemberAdded", (groupId, commitmentId) => {
                console.log(groupId, commitmentId);
            });
        })
        
        it("Should Login", async () => {
            const message = await contractOwner.signMessage("Register: zkOauth")

            const identity = new ZkIdentity(Strategy.MESSAGE, message)
            const identityCommitment = identity.genIdentityCommitment()

            const tx = await contract.addMember(identityCommitment)
            const rc = await tx.wait()

            contract.on("MemberAdded", (groupId, commitmentId) => {
                console.log(groupId, commitmentId);
            });

            const signal = "Login into test"
            const bytes32Greeting = ethers.utils.formatBytes32String(signal)

            const merkleProof = generateMerkleProof(20, BigInt(0), [identityCommitment], identityCommitment)
            const witness = Semaphore.genWitness(
                identity.getTrapdoor(),
                identity.getNullifier(),
                merkleProof,
                merkleProof.root,
                signal
            )

            const fullProof = await Semaphore.genProof(witness, wasmFilePath, finalZkeyPath)
            const solidityProof = Semaphore.packToSolidityProof(fullProof.proof)

            const nullifierHash = Semaphore.genNullifierHash(merkleProof.root, identity.getNullifier())

            const transaction = await contract.verifyMembership(
                bytes32Greeting,
                merkleProof.root,
                nullifierHash, 
                merkleProof.root,
                solidityProof
            )
            console.log(transaction)
            //await expect(transaction).to.emit(contract, "NewGreeting").withArgs(bytes32Greeting)*/
        })
    })
})
