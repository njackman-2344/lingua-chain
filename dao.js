import ethersjs from 'ethers';
import { DAO_CONTRACT_ADDRESS, DAO_ABI, PROVIDER_URL } from './config';
const provider = new ethersjs.providers.JsonRpcProvider('http://localhost:8545');

export async function checkApprove(){
    const contract = new ethersjs.Contract(DAO_CONTRACT_ADDRESS, DAO_ABI, PROVIDER_URL);
    try{
    const approve = await contract.approve(1);
    console.log(approve);
} catch (error){
    console.log(error);
    throw error;
}
}
app.post('/approve', (req, res) => {
    checkApprove();
    res.send('Approved');
});
