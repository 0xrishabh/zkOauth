import { Strategy, ZkIdentity } from "@zk-kit/identity"

import { providers} from "ethers"
import Head from "next/head"
import React from "react"
import styles from "../styles/Home.module.css"
import { ToastContainer,toast } from "react-toastify";
import Button from '@mui/material/Button'
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


export default function Home() {
    async function register(){
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


      const response = await fetch(`/api/register`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            signature: signature
          })
      })
      const result = await response.json()
      
      if(result["success"]){
      	success("User successfully Registerd")	
      } else {
      	error("User Registration failed")
      }
  }

    return (
        <div className={styles.container} style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
            <Head>
                <title>Greetings</title>
                <meta name="description" content="A simple Next.js/Hardhat privacy application with Semaphore." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer/>

            <div><h1>ZK Oauth</h1></div>
        <div><p> Create your <b>anonymous</b> identity on <b>blockchain</b>. </p></div>
        <div><Button variant="outlined" size="large" className='register' onClick={register}> Register </Button></div>
      </div>
    )
}
