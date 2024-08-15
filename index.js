const timertext=document.getElementById("timer");
const start=document.getElementById("start");
const stop=document.getElementById("stop");

let count = 0;
let timerId;

start.addEventListener("click",()=>{
    timerId=setInterval(()=>{
        timertext.innerText= ++count;

    },1000)
})
stop.addEventListener("click",()=>{
    (typeof timerId==="number")? clearInterval(timerId):alert("Please start timer");
    timerId=undefined;

})