// Paste your deployed Sepolia contract address here:
const ADDRESS = "0xec0d95dc62f0f32A8660Bf6Acbd5185Ef4325846";
const ABI = ["function claimTokens()", "function claimed(address) view returns(bool)", "function balanceOf(address) view returns(uint256)", "function totalSupply() view returns(uint256)", "function transfer(address,uint256) returns(bool)", "function buyEquipment(uint256)", "function getInventory(address) view returns(bool[5])"];
const items = [
["Captain America's Shield",100,"Vibranium defense","#79dfff",'<circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="29"/><circle cx="50" cy="50" r="17"/><path d="M50 34L55 45 67 46 58 54 61 66 50 59 39 66 42 54 33 46 45 45Z"/>'],
["Thor's Hammer",200,"Asgardian power","#b7a1ff",'<rect x="17" y="15" width="66" height="35" rx="4"/><path d="M43 50V88H57V50M25 22V43M75 22V43"/>'],
["Iron Man's Suit",300,"Stark technology","#ffb86b",'<path d="M25 15H75L86 42 72 85H28L14 42Z M25 42L43 48 40 57 23 51 M75 42L57 48 60 57 77 51 M38 73H62"/>'],
["Hawkeye's Bow",150,"Precision weaponry","#c49aff",'<path d="M25 10Q90 50 25 90L25 10M10 50H90M80 40L90 50 80 60"/>'],
["Infinity Gauntlet",500,"Cosmic artifact","#ffda79",'<path d="M30 90V53L17 38 24 29 38 42V12H48V40 52V8H62V40 66V15H76V43 80V25H90V65L74 90Z"/><circle cx="58" cy="60" r="9"/><circle cx="44" cy="47" r="4"/><circle cx="59" cy="47" r="4"/><circle cx="73" cy="47" r="4"/>']
];
const $=id=>document.getElementById(id);
const status=t=>{ $("status").textContent=t; const n=$("toast"); n.textContent=t; n.classList.add("visible"); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>n.classList.remove("visible"),7000); };
let ethers, contract, account;
$("cards").innerHTML=items.map(([name,price,desc,color,art],i)=>`<article class="card" style="--accent:${color}"><small>ARTIFACT / 0${i+1} · ${["ELITE","MYTHIC","LEGENDARY","ELITE","COSMIC"][i]}</small><div class="art"><img src="artifact-${i}.svg" alt="${name}"></div><h3>${name}</h3><p>${desc} · Virtual collectible</p><div class="cardfoot"><span class="price">${price} AVC</span><button data-buy="${i}">Acquire ↗</button></div></article>`).join("");
async function refresh(){
 const [balance,supply,owned,claimed]=await Promise.all([contract.balanceOf(account),contract.totalSupply(),contract.getInventory(account),contract.claimed(account)]);
 $("balance").textContent=ethers.formatUnits(balance,18)+" AVC";
 $("supply").textContent=ethers.formatUnits(supply,18)+" AVC";
 $("owned").innerHTML=items.map((x,i)=>owned[i]?`<div class="owned-item"><img src="artifact-${i}.svg" alt=""><span>${x[0]}<small>VERIFIED ON-CHAIN ✓</small></span></div>`:"").join("")||"No equipment yet.";
 $("claim").disabled=claimed;
 $("claim").textContent=claimed?"Welcome reward claimed":"Claim 1,000 AVC ↗";
 document.querySelectorAll("[data-buy]").forEach(b=>{b.disabled=owned[Number(b.dataset.buy)];b.textContent=b.disabled?"Owned ✓":"Acquire ↗"});
}
async function connect(){
 if(!window.ethereum) throw Error("Install MetaMask in your browser first.");
 if(!ADDRESS) throw Error("Preview only: deploy the contract and paste its address in script.js.");
 ethers=await import("https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm");
 if(!ethers.isAddress(ADDRESS)) throw Error("Invalid contract address.");
 await window.ethereum.request({method:"eth_requestAccounts"});
 await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0xaa36a7"}]});
 const provider=new ethers.BrowserProvider(window.ethereum);
 if(await provider.getCode(ADDRESS)==="0x") throw Error("No contract at this address on Sepolia.");
 const signer=await provider.getSigner();account=await signer.getAddress();
 contract=new ethers.Contract(ADDRESS,ABI,signer);
 $("wallet").textContent=account.slice(0,8)+"…"+account.slice(-5);
 $("connect").textContent="Wallet connected ✓";await refresh();status("Connected to Sepolia. Transactions require test ETH.");
}
let busy=false;
async function run(action){if(busy)return;busy=true;try{await action()}catch(e){status(e.shortMessage||e.message||"Transaction failed.")}finally{busy=false}}
async function tx(action){if(!contract)throw Error("Connect your wallet first.");status("Confirm the transaction in MetaMask.");const t=await action();status("Waiting for blockchain confirmation… "+t.hash);await t.wait();await refresh();status("Transaction confirmed: "+t.hash)}
$("connect").onclick=()=>run(connect);
$("claim").onclick=()=>run(()=>tx(()=>contract.claimTokens()));
document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>run(()=>tx(()=>contract.buyEquipment(Number(b.dataset.buy)))));
$("send").onsubmit=e=>{e.preventDefault();run(()=>tx(()=>contract.transfer(ethers.getAddress($("recipient").value.trim()),ethers.parseUnits($("amount").value,18))))};
if(window.ethereum){window.ethereum.on("accountsChanged",()=>location.reload());window.ethereum.on("chainChanged",()=>location.reload());}
