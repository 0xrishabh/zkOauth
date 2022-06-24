const express = require('express')
const app = express()
const port = 3000

const {getAllMembers,buildMerkleTree,generateProofParam} = require('./src.js')
app.get('/getProofParam/:commitmentId', (req, res) => {
    let commitmentId = req.params.commitmentId;
    let allMembers = getAllMembers();
    let merkleTree = buildMerkleTree(allMembers);
    let pathIndices,siblings = generateProofParam(merkleTree,commitmentId)
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})