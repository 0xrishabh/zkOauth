import * as React from 'react';
import "./App.css"
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login"
/*
import { Identity } from "@semaphore-protocol/identity"

const identity = new Identity()
const trapdoor = identity.getTrapdoor()
const nullifier = identity.getNullifier()
const commitment = identity.generateCommitment()
console.log({
	trapdoor,
	nullifier,
	commitment
})
*/

function App() {
  return (
  	<Routes>
  	    <Route exact path="/" element={<Home />}/>
  	    <Route exact path="login" element={<Login />}/>
  	 </Routes>
  )
}


export default App;
