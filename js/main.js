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
let sequence = 1;
let sequenceTimer = 0;
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

    // sequence => 10 milliseconds
    // milliseconds => seconds box
    // seconds => minutes box
    // minutes => hours box
    stopWatchInterval = setInterval(() => {
        if (!isPause) {
            if (sequence % 100 === 0) {
                minutes >= 59 ? (minutes = 0) : minutes++;
                minutes = minutes > 9 ? minutes : "0" + minutes;
            }
            if (sequence % 6000 === 0) {
                hours >= 59 ? (hours = 0) : hours++;
                hours = hours > 9 ? hours : "0" + hours;
            }
            seconds >= 99 ? (seconds = 0) : seconds++;
            seconds = seconds > 9 ? seconds : "0" + seconds;
            sequence++;
            insertTime();
        }
    }, 10);
}

function timer() {
    clearIntervals();
    removeActiveOpt();
    timerId.classList.add("activeOpt");
    removeArrows();
    removeFuncBts();

    timerInterval = setInterval(() => {
        if (!isPause) {
            if (sequenceTimer % 60 === 0) {
                minutes <= 0 ? (minutes = 59) : minutes--;
                minutes = minutes > 9 ? minutes : "0" + minutes;
            }
            if (sequenceTimer % 3600 === 0) {
                hours <= 0 ? (hours = 24) : hours--;
                hours = hours > 9 ? hours : "0" + hours;
            }
            seconds <= 0 ? (seconds = 59) : seconds--;
            seconds = seconds > 9 ? seconds : "0" + seconds;
            
            if (sequenceTimer == 0) {
                restartTime();
                window.alert("Timer Done");
            } else {
                sequenceTimer--;
            }
            insertTime();
        }
    }, 1000);
}

function increaseNum() {
    let numId = window.event.target.nextElementSibling.id;
    switch (numId) {
        case "numHours":
            hours >= 24 ? (hours = 0) : hours++;
            hours = hours > 9 ? hours : "0" + hours;
            sequenceTimer += 3600;
            break;
        case "numMinutes":
            minutes >= 59 ? (minutes = 0) : minutes++;
            minutes = minutes > 9 ? minutes : "0" + minutes;
            sequenceTimer += 60;
            break;
        case "numSeconds":
            seconds >= 59 ? (seconds = 0) : seconds++;
            seconds = seconds > 9 ? seconds : "0" + seconds;
            sequenceTimer++;
            break;
    }
    insertTime();
}

function decreaseNum() {
    let numId = window.event.target.previousElementSibling.id;
    switch (numId) {
        case "numHours":
            hours <= 0 ? (hours = 24) : hours--;
            hours = hours > 9 ? hours : "0" + hours;
            sequenceTimer -= 3600;
            break;
        case "numMinutes":
            minutes <= 0 ? (minutes = 59) : minutes--;
            minutes = minutes > 9 ? minutes : "0" + minutes;
            sequenceTimer -= 60;
            break;
        case "numSeconds":
            seconds <= 0 ? (seconds = 59) : seconds--;
            seconds = seconds > 9 ? seconds : "0" + seconds;
            sequenceTimer--;
            break;
    }
    insertTime();
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
    clearInterval(timerInterval);
    restartTime();
}

function restartTime() {
    pauseTime();
    hours = 0;
    minutes = 0;
    seconds = 0;
    sequence = 1;
    sequenceTimer = 0;
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

clock();
