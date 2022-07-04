const ethers = require("ethers");
const zkOauthABI = require("./ZKOauth.json")
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

export default async function handler(req, res) {
  const contract = getContract();
  const Bmembers = await contract.getMembers(); 
  const members = Bmembers.map(Bid => Bid.toString())
  res.json({members: members})
}
