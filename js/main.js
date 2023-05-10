const clockId = document.getElementById("clock");
const stopWatchId = document.getElementById("stopWatch");
const timerId = document.getElementById("timer");
const options = document.querySelector(".options");
const arrow = document.getElementsByClassName("arrow");
const number = document.querySelector(".number");
const numHours = document.getElementById("numHours");
const numMinutes = document.getElementById("numMinutes");
const numSeconds = document.getElementById("numSeconds");
const restart = document.querySelector(".restart");
const pause = document.querySelector(".pause");
const start = document.querySelector(".start");

let hours = 0;
let minutes = 0;
let seconds = 0;
let totalSec = 1;
let clockInterval;
let stopWatchInterval;
let timerInterval;
let isPause = true;

function clock() {
    clearIntervals();
    removeActiveOpt();
    clockId.classList.add("activeOpt");
    removeArrows();
    removeFuncBts();

    clockInterval = setInterval(function () {
        hours =
            new Date().getHours() > 9
                ? new Date().getHours()
                : "0" + new Date().getHours();
        minutes =
            new Date().getMinutes() > 9
                ? new Date().getMinutes()
                : "0" + new Date().getMinutes();
        seconds =
            new Date().getSeconds() > 9
                ? new Date().getSeconds()
                : "0" + new Date().getSeconds();
        insertTime();
    }, 100);
}

function stopWatch() {
    clearIntervals();
    removeActiveOpt();
    stopWatchId.classList.add("activeOpt");
    removeArrows();
    removeFuncBts();

    stopWatchInterval = setInterval(() => {
        if (!isPause) {
            if (totalSec % 60 === 0) {
                minutes >= 59 ? (minutes = 0) : minutes++;
                minutes = minutes > 9 ? minutes : "0" + minutes;
            }
            if (totalSec % 3600 === 0) {
                hours >= 24 ? (hours = 0) : hours++;
                hours = hours > 9 ? hours : "0" + hours;
            }
            seconds >= 59 ? (seconds = 0) : seconds++;
            seconds = seconds > 9 ? seconds : "0" + seconds;
            totalSec++;
            insertTime();
        }
    }, 1000);
}

function pauseTime() {
    isPause = true;
}

function startTime() {
    isPause = false;
}

function clearIntervals() {
    clearInterval(clockInterval);
    clearInterval(stopWatchInterval);
    // clearInterval(clockInterval);
    restartTime();
}

function restartTime() {
    pauseTime();
    hours = 0;
    minutes = 0;
    seconds = 0;
    totalSec = 1;
    hours = hours > 9 ? hours : "0" + hours;
    minutes = minutes > 9 ? minutes : "0" + minutes;
    seconds = seconds > 9 ? seconds : "0" + seconds;
    insertTime();
}

function insertTime() {
    numHours.innerText = hours;
    numMinutes.innerText = minutes;
    numSeconds.innerText = seconds;
}

function timer() {
    clearIntervals();
    removeActiveOpt();
    timerId.classList.add("activeOpt");
    removeArrows();
    removeFuncBts();
    stopClock();
}

function removeActiveOpt() {
    clockId.classList.remove("activeOpt");
    stopWatchId.classList.remove("activeOpt");
    timerId.classList.remove("activeOpt");
}

function removeArrows() {
    if (timerId.classList.contains("activeOpt")) {
        for (let i = 0; arrow.length > i; i++) {
            arrow[i].classList.remove("hide");
        }
    } else {
        for (let i = 0; arrow.length > i; i++) {
            arrow[i].classList.add("hide");
        }
    }
}

function removeFuncBts() {
    if (clockId.classList.contains("activeOpt")) {
        restart.classList.add("hide");
        start.classList.add("hide");
        pause.classList.add("hide");
    } else {
        restart.classList.remove("hide");
        start.classList.remove("hide");
        pause.classList.remove("hide");
    }
}

function increaseNum() {
    let numId = window.event.target.nextElementSibling.id;
    switch (numId) {
        case "numHours":
            console.log("test");
            console.log(new Date().getMinutes());
            break;
        case "numMinutes":
            // sss
            break;
        case "numSeconds":
            // sss
            break;
    }
    console.log(window.event);
    console.log(window.event.target.nextElementSibling);
    console.log(window.event.target.nextElementSibling.id);
}

function decreaseNum() {
    console.log(window.event.target.previousElementSibling);
}

clock();

// upArrow.addEventListener("click", () => {
//     // number[0].textContent = "1";
//     console.log(upArrow.childElementCount);
// })
