const ethers = require("ethers");
const { Strategy, ZkIdentity } = require("@zk-kit/identity")
const {getContract} = require("./_utils")


async function addMember(signature){
	const contract = utils.getContract();
	const identity = new ZkIdentity(Strategy.MESSAGE, signature)
	const identityCommitment = identity.genIdentityCommitment()
	const abiCoder = new ethers.utils.AbiCoder();
	const formattedIdentityCommitment = abiCoder.encode(
	  ['uint256'],
	  [identityCommitment]
	);
	const transaction = await contract.addMember(formattedIdentityCommitment);
	const transactionReceipt = await transaction.wait();
	if (transactionReceipt.status !== 1) {
	  return false
	}
	return true
}
export default async function handler(req, res) {
	const signature = req.body.signature;
	const status = await addMember(signature);
	res.setHeader("Content-Type", "application/json")
	res.send(JSON.stringify({"success": status}))
}
