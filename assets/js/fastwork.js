//setup//
var vitralAddress1 = '0x4DF844490006fA8098Cce548508956896D6496c2'; //NFTContract
var keymintcontract = "Public1"; //ContractInput String
var popupsuccessmax = 2;
var soldoutnft = 639;
//setup//

var mintnftamount = 1;

window.onload = function () {
  document.getElementById('connectButton').innerHTML = "🦊Pls install metamask..";
  if (typeof web3 != 'undefined') {
    document.getElementById('connectButton').innerHTML = "💌Connect Wallet";
  }
  document.getElementById('connectButton').addEventListener('click', () => {
    load();
  });

  load();
}

async function loadWeb3() {
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.request({ method: 'eth_requestAccounts' });
  }
}

async function getCurrentAccount() {
  const accounts = await window.web3.eth.getAccounts();
  return accounts[0];
}

async function LoadContract(abi, address) {
  return await new window.web3.eth.Contract(abi, address);
}

async function loadNFT() {
    const contract_abi = [{"inputs":[],"name":"AllOwnershipsHaveBeenSet","type":"error"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"NoTokensMintedYet","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"QuantityMustBeNonZero","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MODEL","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"name":"__ERC721A_init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"data","type":"bytes32"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"_verifySig","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"address[]","name":"wallets","type":"address[]"}],"name":"addRoundWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"beneficiary","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"nonces","type":"uint256[]"}],"name":"burnNonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"config","outputs":[{"internalType":"bool","name":"allowNFTUpdate","type":"bool"},{"internalType":"bool","name":"allowConfUpdate","type":"bool"},{"internalType":"bool","name":"allowContract","type":"bool"},{"internalType":"bool","name":"allowPrivilege","type":"bool"},{"internalType":"bool","name":"randomAccessMode","type":"bool"},{"internalType":"bool","name":"allowTarget","type":"bool"},{"internalType":"bool","name":"allowLazySell","type":"bool"},{"internalType":"uint64","name":"maxSupply","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721ASBUpgradable.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721ASBUpgradable.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"}],"name":"getRoundWallet","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"grantRoles","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"pricePerUnit","type":"uint256"},{"internalType":"address","name":"denominatedAsset","type":"address"},{"internalType":"address","name":"refPorject","type":"address"},{"internalType":"uint256","name":"chainID","type":"uint256"}],"name":"hash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"initArg","type":"bytes"},{"internalType":"uint128","name":"_bip","type":"uint128"},{"internalType":"address","name":"_feeReceiver","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"string","name":"roundName","type":"string"}],"name":"isQualify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"listQualifiedRound","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listRole","outputs":[{"internalType":"string[]","name":"names","type":"string[]"},{"internalType":"bytes32[]","name":"code","type":"bytes32[]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"listRoleWallet","outputs":[{"internalType":"address[]","name":"roleMembers","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listRounds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"listToken","outputs":[{"internalType":"uint256[]","name":"tokenList","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"wallets","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"massMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"pricePerUnit","type":"uint256"},{"internalType":"address","name":"denominatedAsset","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"pricePerUnit","type":"uint256"},{"internalType":"address","name":"denominatedAsset","type":"address"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"reciever","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintNext","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reciever","type":"address"},{"internalType":"uint256","name":"target","type":"uint256"}],"name":"mintTarget","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"uint128","name":"_price","type":"uint128"},{"internalType":"uint32","name":"_quota","type":"uint32"},{"internalType":"uint16","name":"_amountPerUser","type":"uint16"},{"internalType":"bool","name":"_isActive","type":"bool"},{"internalType":"bool","name":"_isPublic","type":"bool"},{"internalType":"bool","name":"_isMerkle","type":"bool"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"newRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"address[]","name":"wallets","type":"address[]"}],"name":"removeRoundWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"nonces","type":"uint256[]"}],"name":"resetNonce","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"revokeRoles","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"}],"name":"roundInfo","outputs":[{"components":[{"internalType":"uint128","name":"price","type":"uint128"},{"internalType":"uint32","name":"quota","type":"uint32"},{"internalType":"uint16","name":"amountPerUser","type":"uint16"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isPublic","type":"bool"},{"internalType":"bool","name":"isMerkleMode","type":"bool"},{"internalType":"bool","name":"exist","type":"bool"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct SBII721A.Round","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"setBeneficiary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_maxSupply","type":"uint64"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"bytes32","name":"root","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"setOwnersExplicit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"triggerRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_allowNFTUpdate","type":"bool"},{"internalType":"bool","name":"_allowConfUpdate","type":"bool"},{"internalType":"bool","name":"_allowContract","type":"bool"},{"internalType":"bool","name":"_allowPrivilege","type":"bool"},{"internalType":"bool","name":"_allowTarget","type":"bool"},{"internalType":"bool","name":"_allowLazySell","type":"bool"}],"name":"updateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"roundName","type":"string"},{"internalType":"uint128","name":"_price","type":"uint128"},{"internalType":"uint32","name":"_quota","type":"uint32"},{"internalType":"uint16","name":"_amountPerUser","type":"uint16"},{"internalType":"bool","name":"_isPublic","type":"bool"}],"name":"updateRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newURI","type":"string"}],"name":"updateURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const contract_address = vitralAddress1;
    window.NFTcontract = await LoadContract(contract_abi, contract_address);
}

async function load() {
  await loadWeb3();
  await loadNFT();
  account = await getCurrentAccount();
  let resulta = account.substring(0,6);
  let resultb = account.substring(38,42);
  document.getElementById('connectButton').innerHTML = `${resulta}...${resultb}`;
  document.getElementById("disbtn").style.display = "inline";
  const network = await web3.eth.net.getId();
  if ( network != 1 ) { 
    document.getElementById('connectButton').innerHTML = "Require ETH Network";
   }
  await updatemintinfo();
  await updatemintcount();
}

async function amountadd() {
  if ( mintnftamount < 20 ) {
    mintnftamount = mintnftamount + 1;
    updatemintinfo();
    }
}

async function amountsub() {
    if ( mintnftamount > 1 ) {
    mintnftamount = mintnftamount - 1;
    updatemintinfo();
    }
  }

async function updatemintinfo() {
  const amount = mintnftamount;
  const info = await window.NFTcontract.methods.roundInfo(keymintcontract).call();
  document.getElementById('mintedinfo').innerHTML = `Mint ${amount} NFT ( ${amount*info[0]/1000000000000000000} ETH )`;
}

async function updatemintcount() {
    const minted = await window.NFTcontract.methods.totalSupply().call();
    const info = await window.NFTcontract.methods.roundInfo(keymintcontract).call();
    document.getElementById('mintedcount').innerHTML = `🔥 Remaining 2<sup>th</sup> Round: ${info[1]}`;
  
 //  document.getElementById('mintedcount').innerHTML = `🔥 : ${minted-soldoutnft} / ${info[1]}`;   //
  
  

}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

async function mintnft() {
  const account = await getCurrentAccount();
  const info = await window.NFTcontract.methods.roundInfo(keymintcontract).call();
  const price = mintnftamount*info[0]/1000000000000000000;
  await window.NFTcontract.methods.mint(keymintcontract,mintnftamount).send({ from: account, value: web3.utils.toWei(`${price}`, "ether") }).catch (function (error){
    location.reload();
  });
    const random = generateRandomInteger(popupsuccessmax);
    document.getElementById('popupimg').src=`assets/img/success${random}.jpg`;
    document.getElementById("popupimg").style.display = "inline";
}

async function closepopup() {
    document.getElementById("popupimg").style.display = "none";
}

async function disconnect() {
    document.getElementById('connectButton').innerHTML = "Connect Wallet";
    document.getElementById("disbtn").style.display = "none";
    await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [{eth_accounts: {}}]
    })
}


window.ethereum.on('accountsChanged', function (accounts) { location.reload(); })
window.ethereum.on('chainChanged', function (accounts) { location.reload(); })
