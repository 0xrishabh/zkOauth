const ethers = require("ethers");
const {getContract} = require("./_utils")
const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL


export default async function handler(req, res) {
  const contract = getContract();
  const Bmembers = await contract.getMembers(); 
  const members = Bmembers.map(Bid => Bid.toString())
  res.json({members: members})
}
