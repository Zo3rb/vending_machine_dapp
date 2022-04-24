import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/6493d6088f1d43bd9c1b0699bc9eba19');

const web3 = new Web3(provider);

const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "donutBalances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVendingMachineBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "purchase", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "restock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

const vmContract = new web3.eth.Contract(abi, '0x28A34Aae7072Ae0C9F2a546A0e57faa6618620F7');

export default vmContract;
