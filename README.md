## What is ZK-OAUTH ?

Zk-Oauth is an application that acts like a plug and play of authentication 
and *relaying transactinon* (in future) for other zk-dapps.

For any apps that wants to protect user privacy, need to use two components -
	* Creating anonymous identity
	* Relayers

And zk-Oauth will provide both of these components as a simple plug.


##Technology Stack

##### Front-End
	1. Next Js
	2. material.js
##### Backend
	1. Solidity contract - zkOauth.sol
	2. Semaphore - appliedzkp library
	3. Relayer Api
	
##### Deployment -
	1. Frontend and relayer API on Vercel
	2. Smart Contract on goerli,Polygon mainnet,polygon mumbai,ropsten.

## How it works?

![working](https://raw.githubusercontent.com/0xrishabh/zkOauth/master/working.jpg)

###### Phase 1
1. User registers himself on zk-Oauth & gets their identity

##### Phase 2

1. `other dapp` ask user to login through `zk-Oauth`
2. User gets redirected to `zk-oauth` website, there they generate the proof of their membership 
	then the proof get's verified 
3. If user was a member in `zk-oauth`, the user gets redirected to the `other dapp` with 
	commitmentId 

* This commitmentId acts like the unique identifier of the user for the other dapp* 


## setup:

1. `yarn install`
2. `yarn compile`
3. `yarn test`
4. `yarn dev`
5. `yarn deploy --network localhost`
6. `node relayer/src/index.js`

Go to http://localhost:3000/

