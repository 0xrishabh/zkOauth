import {useParam} from "react-router-dom";

import path from 'path';
import fs from 'fs';
import Button from '@mui/material/Button'
import { providers,Contract, utils } from "ethers"
import { Strategy, ZkIdentity } from "@zk-kit/identity"
import { generateMerkleProof, Semaphore } from "@zk-kit/protocols"
import styles from "../styles/Home.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const success = (message) => {
	toast.success(message, {
	  position: "bottom-right",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true,
	  progress: undefined,
	});
};
const error = (message) => {
	toast.error(message, {
	  position: "top-center",
	  autoClose: 5000,
	  hideProgressBar: false,
	  closeOnClick: true,
	  pauseOnHover: true,
	  draggable: true,
	  progress: undefined,
	});
};

async function getAllMembers(id){
    let response = await fetch("http://localhost:8000/getAllLeaves")
    let result = await response.json()
    return result["leaves"]
}
async function login(){
    const message = "Make me anonymous"
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(message)
    const address = await signer.getAddress()


    const identity = new ZkIdentity(Strategy.MESSAGE, signature)
    const identityCommitment = identity.genIdentityCommitment()
    const identityCommitments = await getAllMembers(identityCommitment)
    console.log(identityCommitments)
    //const indexIdentityCommitment = identityCommitments.indexOf(identityCommitment)

    const merkleProof = generateMerkleProof(
        20, 
        0, 
        identityCommitments, 
        identityCommitment
    )

    const signal = "Login into"
    let externalNullifier = BigInt(Math.floor((Math.random() * 2**256) + 1))
    const witness = Semaphore.genWitness(
        identity.getTrapdoor(),
        identity.getNullifier(),
        merkleProof,
        merkleProof.root,
        signal
    )

    const { proof, publicSignals } = await Semaphore.genProof(witness, "./semaphore.wasm", "./semaphore.zkey")
    const solidityProof = Semaphore.packToSolidityProof(proof)
    let root = merkleProof.root.toString()
    let nullifierHash = publicSignals.nullifierHash
    
    let response = await fetch("http://localhost:8000/login",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        	signedMessage: signature,
            signal: signal,
            root: merkleProof.root.toString(),
            nullifierHash: publicSignals.nullifierHash.toString(),
            externalNullifier: publicSignals.externalNullifier.toString(),
            proof: solidityProof
        })
    })
    let result = await response.json()
    console.log(result)
    if(result["success"]){
        success("Redirecting...")
    } else {
    	error("Error Occured")
    }
    

}

function Login(){
    return (
        <div className={styles.container} style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
        <div><h1>Login with @</h1></div>
        <div>
            <Button variant="outlined" size="large" className='register' onClick={login}> Login </Button>
        </div>
        <ToastContainer/>
        </div>
    )
}
export default Login
