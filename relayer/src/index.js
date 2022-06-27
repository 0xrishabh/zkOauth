const express = require("express")
const ethers = require("ethers")
const dotenv = require("dotenv")
const zkOauthABI = require("./ZKOauth.json")
const cors = require("cors")
const fs = require('fs');
var bodyParser = require('body-parser')

const app = express()
app.use(cors());
const port = 8000
dotenv.config({path: __dirname+"/../.env"})

const ZK_CONTRACT_ADDRESS = process.env.ZK_CONTRACT_ADDRESS
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PROVIDER_URL = process.env.PROVIDER_URL
console.log(PROVIDER_URL, PRIVATE_KEY, ZK_CONTRACT_ADDRESS)

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
	var obj = JSON.parse(fs.readFileSync(__dirname+'/leaves.json', 'utf8'));
	res.json(obj)
})
app.post("/register",jsonParser, async (req,res) => {
	console.log(req.body.identityCommitment)
	const identityCommitment = req.body.identityCommitment;
	await addMember(identityCommitment)
	fs.readFile(__dirname+'/leaves.json', 'utf8', function readFileCallback(err, data){
	    if (err){
	        console.log(err);
	    } else {
		    obj = JSON.parse(data); //now it an object
		    obj.leaves.push(identityCommitment); //add some data
		    json = JSON.stringify(obj); //convert it back to json
		    fs.writeFile(__dirname+'/leaves.json', json, 'utf8',()=>{}); // write it back 
		}
	});
	res.sendStatus(200);
})

app.post("/login",jsonParser, async (req,res) => {
	// Get all parmam
	const signal = ethers.utils.formatBytes32String(req.body.signal)
	const root = toBigInt(req.body.root)
	const nullifierHash = toBigInt(req.body.nullifierHash)
	const externalNullifier = toBigInt(req.body.externalNullifier)
	const proof = req.body.proof
	//proof.forEach((num,ind)=>{
		//proof[ind] = toBigInt(num)
	//})
	//console.log(signal,nullifierHash,externalNullifier,proof)
	// verify the membership 
	const contract = getContract()
	const transaction = await contract.verifyMembership(
		signal,
		root,
		nullifierHash,
		root,
		proof
	)
	const transactionReceipt = await transaction.wait()
	//console.log(transactionReceipt.logs)
	res.setHeader('Content-Type', 'application/json');
	if (transactionReceipt.status !== 1) {
	    console.log(transactionReceipt)
	    res.end(JSON.stringify({ "sucess": false }));
	}

	res.end(JSON.stringify({ "sucess": true }));
		
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
