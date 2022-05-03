const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");

var timer = [0, 0, 0, 0]; 
var timerRunning = false;
var interval;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
        return time;
}

function spellCheck(){
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length); 

    if(textEntered == originText){
        testWrapper.style.borderColor = "green";
        clearInterval(interval);
    }
    else{
        if(textEntered == originTextMatch){
            testWrapper.style.borderColor = "yellow";
        }
        else{
            testWrapper.style.borderColor = "red";
        }
    }
}

function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);

    theTimer.innerHTML = currentTime;

    timer[3]++; //sadome saniye

    timer[0] = Math.floor((timer[3] / 100) / 60); //daghighe

    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60); //saniye

    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //sadome saniye
}


function Start(){
    let textEnteredLength = testArea.value.length;

    if (textEnteredLength == 0 && !timerRunning) {
        timerRunning = true;
       interval = setInterval(runTimer, 10); 
    }
}

testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCheck);
resetButton,addEventListener("click", reset);
