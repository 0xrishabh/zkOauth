const ethers = require("ethers")
const jwt = require("jsonwebtoken")
const zkOauthABI = require("../ZKOauth.json")
const { Strategy, ZkIdentity } = require("@zk-kit/identity")
const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL


function getContract() {
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(
    ZK_CONTRACT_ADDRESS,
    zkOauthABI['abi'],
    wallet
  );
  return contract;
}
function toBigInt(number){
	const abiCoder = new ethers.utils.AbiCoder();
	const BNIdentityCommitment = ethers.BigNumber.from(number);
	const formattedIdentityCommitment = abiCoder.encode(
	    ['uint256'],
	    [BNIdentityCommitment]
	  );
	return formattedIdentityCommitment
}

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
