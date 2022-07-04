const ethers = require("ethers");
const { Strategy, ZkIdentity } = require("@zk-kit/identity")
const zkOauthABI = require("../ZKOauth.json")
const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL

console.log(PROVIDER_URL)
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

async function addMember(signature){
	const contract = getContract();
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
