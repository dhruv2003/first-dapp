## Setup Instructions

1. Create a `config.js` file in the project root directory with the following content:
   ```javascript
   export const MoodContractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

   export const MoodContractABI = [
     {
       "inputs": [{ "internalType": "string", "name": "_mood", "type": "string" }],
       "name": "setMood",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "getMood",
       "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
       "stateMutability": "view",
       "type": "function"
     }
   ];