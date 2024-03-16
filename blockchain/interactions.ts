import Web3 from "web3";
import DecisionRecorder from "./contracts/DecisionRecorder.json";

const web3 = new Web3(process.env.ETHEREUM_PROVIDER_URL!);
const contractAddress = process.env.CONTRACT_ADDRESS!;
const contractABI = DecisionRecorder.abi;

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function recordDecision(useCase: string, layer: number, decision: boolean, biases: string[]) {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  await contract.methods.recordDecision(useCase, layer, decision, biases).send({ from: account });
}