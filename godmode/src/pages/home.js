
import Button from '@mui/material/Button';
import Container from '@mui/material/Button';
import TypeAnimation from 'react-type-animation';
import { provider,providers } from 'ethers';

async function register(){
    /*
      * Prompts user to sign a message
      * Creates a semaphore identity with the signed message
      * Use that identity to add into the on-chain group
    */
    const message = "Make me anonymous"
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(message)
    const address = await signer.getAddress()
    console.log({ signer, signature, address })
  
    /*const identity = new Identity(signature)
    const trapdoor = identity.getTrapdoor()
    const nullifier = identity.getNullifier()
    const commitment = identity.generateCommitment()
    
    console.log(trapdoor, nullifier, commitment)*/
  
}

function Home() {
    return ( 
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        <div><h1>ZK Oauth</h1></div>
        <div><p> Create your <b>anonymous</b> identity on <b>blockchain</b>. </p></div>
        <div><Button variant="outlined" size="large" className='register' onClick={register}> Register </Button></div>
      </div>
    )
  }


export default Home
