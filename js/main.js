// create div of ballons

let ballonDiv = document.querySelector(".section1 .container .part:nth-of-type(2)");
setInterval(function(){
let ballonSpan = document.createElement("span");
ballonSpan.classList.add("span1");
let ballonSpanChild = document.createElement("span");
ballonSpan.style.cssText=`--colorBallon:rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)});--start:-${Math.floor(Math.random()*20)}%;--end:${Math.floor(Math.random()*200)}%`;
ballonSpan.appendChild(ballonSpanChild);
ballonDiv.appendChild(ballonSpan);
},400)
setTimeout(setInterval(function(){
    ballonDiv.removeChild(ballonDiv.firstChild);
},450),1000)
let colorfulDiv = document.querySelector(".section1 .container .part:nth-of-type(1)");
setInterval(function(){
    colorfulDiv.style.cssText=`background-image:linear-gradient(-45deg,rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}) ${Math.floor(Math.random()*70)}%,rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}) 100%);`;
    },1000)