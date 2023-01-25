// create div of ballons

let ballonDiv = document.querySelector(".gameBallon .container .part:nth-of-type(2)");
setInterval(function(){
let ballonSpan = document.createElement("span");
ballonSpan.classList.add("span1");
let ballonSpanChild = document.createElement("span");
ballonSpan.style.cssText=`--colorBallon:rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)});--start:-${Math.floor(Math.random()*20)}%;--end:${Math.floor(Math.random()*200)}%`;
ballonSpan.appendChild(ballonSpanChild);
ballonDiv.appendChild(ballonSpan);
},300)
setTimeout(setInterval(function(){
    ballonDiv.removeChild(ballonDiv.firstChild);
},500),1000)
let colorfulDiv = document.querySelector(".gameBallon .container .part:nth-of-type(1)");
setInterval(function(){
    colorfulDiv.style.cssText=`background-image:linear-gradient(-45deg,rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}) ${Math.floor(Math.random()*70)}%,rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}) 100%);`;
    },1000)

//     // clock section

    let backClock = document.querySelector(".back");
    let brightClock = document.querySelector(".bright");
    setInterval(function(){
        let a = Math.floor(Math.random()*200);
        let b = Math.floor(Math.random()*200);
        let c = Math.floor(Math.random()*200);

        backClock.style.cssText=`background-image: conic-gradient(rgb(${a + 100},${b + 100},${c + 100}) 20%,rgb(${a + 50},${b + 50},${c + 50}) 40%, rgb(${a},${b},${c}) 80%,rgb(${a},${b},${c}) 93%,rgb(${a + 100},${b + 100},${c + 100}) 100%);`
        brightClock.style.cssText=`background-color: rgba(${a + 50},${b + 50},${c + 50}, 0.68);`;
    },1000)

    // clock programming
    
    let mydate = new Date();
    let hour = mydate.getHours();
    let min = mydate.getMinutes();
    let sec = mydate.getSeconds();
    let a=sec * 6 - 90;
    let b=min * 6 - 90;
    let c=hour * 30 - 90;
    span3.style.cssText=`transform:rotate(${a}deg) translate(0%,-50%);`
    span2.style.cssText=`transform:rotate(${b}deg) translate(0%,-50%);`
    span1.style.cssText=`transform:rotate(${c}deg) translate(0%,-50%);`

    setInterval(function(){
        span3.style.cssText=`transform:rotate(${a+= 6}deg) translate(0%,-50%);`
        if(a >=360){
            a=0;
        span2.style.cssText=`transform:rotate(${b+= 6}deg) translate(0%,-50%);`
        if(b >= 360){
            b=0;
        span1.style.cssText=`transform:rotate(${c+= 30}deg) translate(0%,-50%);`
        if(c >= 360){
            c=0;
        }
    }
    }
    },1000)
    
    // 