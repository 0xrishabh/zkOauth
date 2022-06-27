import detectEthereumProvider from "@metamask/detect-provider"
import { Strategy, ZkIdentity } from "@zk-kit/identity"
import { generateMerkleProof, Semaphore } from "@zk-kit/protocols"
import { providers,Contract, utils } from "ethers"
import Head from "next/head"
import React from "react"
import { useState, useEffect } from "react"
import styles from "../styles/Home.module.css"
import GreetForm from "./components/GreetingForm";
import Greeter from "artifacts/contracts/Greeters.sol/Greeters.json"

import Button from '@mui/material/Button'



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
      const identity = new ZkIdentity(Strategy.MESSAGE, signature)
      const identityCommitment = identity.genIdentityCommitment()
      console.log(identityCommitment)    

      fetch(`http://localhost:8000/register`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            identityCommitment: identityCommitment.toString()
          })
      })
      .then(response => response.json())
      .then(json => console.log(json));
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

            <div><h1>ZK Oauth</h1></div>
        <div><p> Create your <b>anonymous</b> identity on <b>blockchain</b>. </p></div>
        <div><Button variant="outlined" size="large" className='register' onClick={register}> Register </Button></div>
      </div>
    )
}