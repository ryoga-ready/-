const touch1=document.getElementById("push1")
const touch2=document.getElementById("push2")
const touch3=document.getElementById("push3")

touch1.addEventListener("touchstart",(e)=>{
    e.preventDefault()
    push1()})

touch2.addEventListener("touchstart",(e)=>{
    e.preventDefault()
    push2()})

touch3.addEventListener("touchstart",(e)=>{
    e.preventDefault()
    push3()})

touch1.addEventListener("click",()=>push1())
touch2.addEventListener("click",()=>push2())
touch3.addEventListener("click",()=>push3())



const symbols=["🍇","🍒","🔔","🤡","🐬","7"]

let coins=100
let bet=3

let spinning=false
let wining=false
let hot=false
let pekaclera=false
let nextWin = false
let reel1
let reel2
let reel3
let reachclera=false

let payout=0


counter=0

function spin(){
    if(spinning)return
    document.getElementById("ルーレット回転中").play()
    document.getElementById("result").textContent=""
    spinning=true

    const coinsdisplay=document.getElementById("coin")
    coinsdisplay.textContent=coins
    
    if(spinning){
    coins-=bet
    coinsdisplay.textContent=coins
}
    if(coins<bet){
        alert("コインが足りません")
        return
    }
    
    if(nextWin){
        wining=true
        nextWin=false
    }

    counter++
    document.getElementById("回転数").textContent=counter //回転数カウンター

const slot1=document.getElementById("slot1")
const slot2=document.getElementById("slot2")
const slot3=document.getElementById("slot3")

reel1=setInterval(()=>{
    const r=Math.floor(Math.random()*symbols.length)
slot1.textContent=symbols[r]},50)

reel2=setInterval(()=>{
    const r=Math.floor(Math.random()*symbols.length)
slot2.textContent=symbols[r]},50)

reel3=setInterval(()=>{
    const r=Math.floor(Math.random()*symbols.length)
slot3.textContent=symbols[r]},50)

/*
setTimeout(stopreel1,onclick.push1)
setTimeout(stopreel2,1300)
setTimeout(stopreel3,1600)
*/
}


let pushstop1=false
let pushstop2=false
let pushstop3=false

function push1(){
    clearInterval(reel1)
    if(wining){
        document.getElementById("slot1").textContent="7"
    }
    if(payout>0){
        document.getElementById("slot1").textContent="🍇"
    }
       document.getElementById("ルーレット停止1").play()
}
function push2(){
    clearInterval(reel2)
    if(wining){
        document.getElementById("slot2").textContent="7"
    }
    if(payout>0){
        document.getElementById("slot2").textContent="🍇"
    }
    document.getElementById("ルーレット停止2").play()
}
function push3(){
    clearInterval(reel3)  

    if(wining){
        document.getElementById("slot3").textContent="7"
    }
    if(payout>0){
        document.getElementById("slot3").textContent="🍇"
    }

    document.getElementById("ルーレット停止3").play()
    const audiostop = document.getElementById("ルーレット回転中");
    audiostop.volume = 0.4;
    audiostop.pause();
    audiostop.currentTime = 0; 
    checkwin();
    wining=false
    spinning=false
    hot=false

    if(payout>0){
        payout+=1
    }
    if(payout>=20){
    payout=0
    const bonusend = document.getElementById("ボーナス音 (1)");
    document.body.classList.remove("peka");
    document.body.classList.remove("bonus");
    bonusend.pause();
    bonusend.currentTime = 0; 
    pekaclera=false
}
}

function checkwin(){

const slot1=document.getElementById("slot1")
const slot2=document.getElementById("slot2")
const slot3=document.getElementById("slot3")

const s1=slot1.textContent
const s2=slot2.textContent
const s3=slot3.textContent


/*
const rundom1=Math.floor(Math.random()*symbols.length)
const rundom2=Math.floor(Math.random()*symbols.length)
const rundom3=Math.floor(Math.random()*symbols.length)
*/
/*
slot1.textContent=symbols[rundom1];
slot2.textContent=symbols[rundom2];
slot3.textContent=symbols[rundom3];
*/


const chance=Math.floor(Math.random()*2)

if(!hot){
const reach=Math.floor(Math.random()*50)
if(reach===0){
    hot=true
}
}



if(hot&&!nextWin&&!wining&&!pekaclera){
   document.getElementById("GOGO").classList.add("GOGO")
   document.getElementById("CHANCE").classList.add("CHANCE")
    document.getElementById("ペカ枠").classList.add("ペカ枠")
    document.body.classList.add("peka");
   if(!reachclera){
   document.getElementById("ペカり音").play()
   reachclera=true
   }


   if(reachclera&&chance===0){
    nextWin=true
   }
}

if(s1=="7"&&
    s2=="7"&&
    s3=="7"){
document.getElementById("result").textContent="BIG BONUS!!"
document.getElementById("ボーナス音 (1)").play()
counter=0
document.getElementById("回転数").textContent=counter
document.getElementById("GOGO").classList.remove("GOGO")
document.getElementById("CHANCE").classList.remove("CHANCE")
document.getElementById("ペカ枠").classList.remove("ペカ枠")
document.body.classList.add("bonus");
const coinsdisplay=document.getElementById("coin")
coinsdisplay.textContent=coins
reachclera=false

coins+=100
payout+=1/*アシストトリガーとして＋1*/
pekaclera=true
}


if(s1=="🔔"&&
    s2=="🔔"&&
    s3=="🔔"){
     coins+=10
     const coinsdisplay=document.getElementById("coin")
     coinsdisplay.textContent=coins
     document.getElementById("払い出し").play()
    }

if(s1=="🍇"&&
    s2=="🍇"&&
    s3=="🍇"){
     coins+=8
     const coinsdisplay=document.getElementById("coin")
     coinsdisplay.textContent=coins
    document.getElementById("払い出し").play()
    }

if(s1=="🤡"&&
    s2=="🤡"&&
    s3=="🤡"){
     coins+=20
     const coinsdisplay=document.getElementById("coin")
     coinsdisplay.textContent=coins
    document.getElementById("払い出し").play()
    }

if(s1=="🍒"&&
    s2=="🍒"){
     coins+=2
     const coinsdisplay=document.getElementById("coin")
     coinsdisplay.textContent=coins
     document.getElementById("払い出し").play()
    }

if(s1=="🍒"&&s2!=="🍒"&&s3!=="🍒"){
     coins+=2
     const coinsdisplay=document.getElementById("coin")
     coinsdisplay.textContent=coins
     document.getElementById("払い出し").play()
     hot=true
    }

if(!nextWin &&!wining&&
    s1=="7"&&
    s2=="7"&&
    s3=="7"){

    slot3.textContent="🍒";

    }

slot1.classList.add("win")
slot2.classList.add("win")
slot3.classList.add("win")
}



