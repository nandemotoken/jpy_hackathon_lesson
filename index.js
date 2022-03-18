window.onload = async function() {

    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const blocknumber = await provider.getBlockNumber();
    alert(blocknumber);
    addresses = await ethereum.request({ method: 'eth_requestAccounts' });
    const signer = await provider.getSigner();
    alert(addresses[0]);

}
 
