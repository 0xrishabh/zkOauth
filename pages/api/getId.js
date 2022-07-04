const jwt = require("jsonwebtoken")
const PRIVATE_KEY = process.env.PRIVATE_KEY

export default async function handler(req,res) {
	const access_token = req.headers["authorization"]
    console.log(req.headers)
	const session = jwt.verify(access_token, PRIVATE_KEY)
	res.json({
		"id": session["id"]
	})
}