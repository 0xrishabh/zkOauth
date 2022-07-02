const express = require("express")
const ethers = require("ethers")
const dotenv = require("dotenv")
const zkOauthABI = require("./ZKOauth.json")
const cors = require("cors")
const fs = require('fs');
const jwt = require("jsonwebtoken")
const { Strategy, ZkIdentity } = require("@zk-kit/identity")
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
const port = 8000
dotenv.config({path: __dirname+"/../.env"})

const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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


async function addMember(identityCommitment) {
  const contract = getContract();
  const abiCoder = new ethers.utils.AbiCoder();
  const BNIdentityCommitment = ethers.BigNumber.from(identityCommitment);
  const formattedIdentityCommitment = abiCoder.encode(
    ['uint256'],
    [BNIdentityCommitment]
  );
  const transaction = await contract.addMember(formattedIdentityCommitment);
  const transactionReceipt = await transaction.wait();
  if (transactionReceipt.status !== 1) {
    console.log('error');
  }
}

app.get("/ping",async  (req, res) => {
  res.send('ok')
  let contract = getContract()
  var tx = await contract.getRoot(0)
  console.log(tx)
  var tx = await contract.getNumberOfLeaves(0)
  console.log(tx)
})

app.get("/getAllLeaves", async(req,res)=>{
	const contract = getContract();
	const allMembers = contract.getMembers();
	console.log(allMembers)
	return allMembers
})
app.post("/register",jsonParser, async (req,res) => {
	console.log(req.body.identityCommitment)
	const identityCommitment = req.body.identityCommitment;
	await addMember(identityCommitment)
	fs.readFile(__dirname+'/leaves.json', 'utf8', function readFileCallback(err, data){
	    if (err){
	        console.log(err);
	    } else {
		    obj = JSON.parse(data);
		    obj.leaves.push(identityCommitment); 
		    json = JSON.stringify(obj);
		    fs.writeFile(__dirname+'/leaves.json', json, 'utf8',()=>{}); 
		}
	});

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ "success": true }));
})
app.post("/getCommitmentID",  async (req,res) => {
	const access_token = req.headers["authorization"]
	const session = jwt.verify(access_token, PRIVATE_KEY)
	res.json({
		"id": session["id"]
	})
})
app.post("/login",jsonParser, async (req,res) => {
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
		root,
		proof
	)
	const transactionReceipt = await transaction.wait()
	res.setHeader('Content-Type', 'application/json');
	if (transactionReceipt.status !== 1) {
	    console.log(transactionReceipt)
	    res.end(JSON.stringify({ "success": false , "token": null}));
	}

	const identity = new ZkIdentity(Strategy.MESSAGE, signedMessage)
	const identityCommitment = identity.genIdentityCommitment()

	const access_token = jwt.sign(
	{
		"id": identityCommitment.toString()
	}, 
		PRIVATE_KEY
	)

	res.end(JSON.stringify({ "success": true, "token": access_token }));
		
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
