let timer = document.querySelector(".timer");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let lapbtn = document.getElementById("lap");
let lapList = document.getElementById("laplist");
let lapCounter = 1;

let msec = 0;
let sec = 0;
let min =  0;

let timerId = null;

startbtn.addEventListener('click', function(){
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId = setInterval(StartWatch,10);
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = `00:00:00`;
    msec = sec = min = 0;
    lapList.innerHTML = ""; 
    lapCounter = 1;
});

lapbtn.addEventListener('click', function(){
    let laptime = `${min<10 ? '0'+min:min}:${sec<10 ? '0'+sec:sec}:${msec<10 ? '0'+msec:msec}`;
    let listitem = document.createElement("li");
    listitem.textContent = `Lap ${lapCounter}: ${laptime}`;
    lapList.appendChild(listitem);
    lapCounter++;
});


function StartWatch(){
    msec++;
    if(msec===100){
        msec = 0;
        sec++;
        if(sec==60){
            sec = 0;
            min++;
        }
    }

    let msecString = msec<10 ? `0${msec}`:msec;
    let secString = sec<10 ? `0${sec}`:sec;
    let minString = min<10 ? `0${min}`:min;

    timer.innerHTML = `${minString}:${secString}:${msecString}`;
}


