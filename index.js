async function myFunction(){
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const blocknumber = await provider.getBlockNumber();
    alert(blocknumber);

async function myFunction2(){
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    await ethereum.request({ method: 'eth_requestAccounts' });
    const signer = await provider.getSigner();
    const addresses = await signer.getAddress();
    alert(addresses[0]);
}

window.onload = ()=>{
    myFunction();
    myFunction2();
}
 
