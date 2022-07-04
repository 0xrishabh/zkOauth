import {useSearchParams} from "react-router-dom";
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { providers,Contract, utils } from "ethers"
import { Strategy, ZkIdentity } from "@zk-kit/identity"
import { generateMerkleProof,genExternalNullifier, Semaphore } from "@zk-kit/protocols"
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

async function getAllMembers(){
    let response = await fetch("/api/members")
    let result = await response.json()
    return result["members"]
}
async function login(redirect_url){
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
    try{
        const merkleProof = generateMerkleProof(
            20, 
            0, 
            identityCommitments, 
            identityCommitment
        )

        const signal = "Login into"
        const nullifier = BigInt(Math.floor((Math.random() * 2**256) + 1));
        const externalNullifier = Semaphore.genNullifierHash(genExternalNullifier(nullifier), identity.getNullifier())
        const witness = Semaphore.genWitness(
            identity.getTrapdoor(),
            identity.getNullifier(),
            merkleProof,
            externalNullifier,
            signal
        )   
        const { proof, publicSignals } = await Semaphore.genProof(witness, "./semaphore.wasm", "./semaphore.zkey")
        const solidityProof = Semaphore.packToSolidityProof(proof)
        
        let response = await fetch("/api/login",{
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
            window.location = `${redirect_url}?token=${result["token"]}`
        } else {
            error("Error Occured")
        }
    } catch (err) {
        console.log(err)
        return false
    }
    
    

}

function Login(){
    const router = useRouter();
    console.log(router.query)
    const client_name = router.query["client_name"]
    const redirect_url = router.query["redirect_url"]

    return (
        <div className={styles.container} style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
        <div><h1>Login @{client_name}</h1></div>
        <div>
            <Button 
                variant="outlined" 
                size="large" 
                className='register' 
                onClick={()=>{login(redirect_url)}}> 
                Login 
            </Button>
        </div>
        <ToastContainer/>
        </div>
    )
}
export default Login
