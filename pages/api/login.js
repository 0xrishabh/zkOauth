const ethers = require("ethers")
const jwt = require("jsonwebtoken")
const {getContract,toBigInt} = require("./_utils")
const { Strategy, ZkIdentity } = require("@zk-kit/identity")
const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL





export default async function handler(req, res) {
    const signedMessage = req.body.signedMessage
	const signal = ethers.utils.formatBytes32String(req.body.signal)
	const root = toBigInt(req.body.root)
	const nullifierHash = toBigInt(req.body.nullifierHash)
	const externalNullifier = toBigInt(req.body.externalNullifier)
	const proof = req.body.proof
	
	const contract = getContract()
	const transaction = await contract.verifyMembership(
		signal,
		root,
		nullifierHash,
		externalNullifier,
		proof
	)
    console.log(transaction)
	//const transactionReceipt = await transaction.wait()
	res.setHeader('Content-Type', 'application/json');
	//if (transactionReceipt.status !== 1) {
	//    console.log(transactionReceipt)
	  //  res.end(JSON.stringify({ "success": false , "token": null}));
	//}

	const identity = new ZkIdentity(Strategy.MESSAGE, signedMessage)
	const identityCommitment = identity.genIdentityCommitment()

	const access_token = jwt.sign(
	{
		"id": identityCommitment.toString()
	}, 
		PRIVATE_KEY
	)

	res.end(JSON.stringify({ "success": true, "token": access_token }));
}
