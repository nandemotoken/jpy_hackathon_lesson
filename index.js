async function myFunction(){
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    await provider.getBlockNumber();
    const signer = await provider.getSigner();
    alert(signer.getAddress());
}

window.onload = ()=>{
    myFunction();
}
 
