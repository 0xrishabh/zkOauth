import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import * as dotenv from "dotenv"
import "hardhat-gas-reporter"
import "hardhat-dependency-compiler"
import { HardhatUserConfig } from "hardhat/config"
import "./tasks/deploy"

dotenv.config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    solidity: "0.8.4",
    dependencyCompiler: {
        paths: [
        "@appliedzkp/semaphore-contracts/base/Verifier.sol"
        ]
    },
    networks: {
    	sepolia: {
    		url: process.env.SEPOLIA_URL,
    		accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],	
    	},
    	goerli: {
    		url: process.env.GOERLI_URL,
    		accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],	
    	},
    	matic: {
    		url: process.env.MATIC_URL,
    		accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            timeout: 100000,
            gas: 2100000,
			gasPrice: 8000000000

    	},
        ropsten: {
            url: process.env.ROPSTEN_URL || "",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
			gas: 2100000,
			gasPrice: 8000000000
        },
        localhost:{
            url: process.env.PROVIDER_URL || "" ,
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        }
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD"
    }
}

export default config
