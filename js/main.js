
const clockId = document.getElementById('clock');
const stopWatchId = document.getElementById('stopWatch');
const timerId = document.getElementById('timer');
const options = document.querySelector('.options');
const arrow = document.getElementsByClassName('arrow');
const number = document.querySelector(".number");

let numHours = 0;
let numMinutes = 0;
let numSeconds = 0;


function clock() {
    removeActiveOpt();
    clockId.classList.add('activeOpt');
    removeArrows();
    
}

function stopWatch() {
    removeActiveOpt();
    stopWatchId.classList.add('activeOpt');
    removeArrows();
}

function timer() {
    removeActiveOpt();
    timerId.classList.add('activeOpt');
    removeArrows();
}

function removeActiveOpt() {
    clockId.classList.remove('activeOpt');
    stopWatchId.classList.remove('activeOpt');
    timerId.classList.remove('activeOpt');   
}

function removeArrows() {
    if (timerId.classList.contains('activeOpt')) {
        for (let i = 0; arrow.length > i; i++) {
            arrow[i].classList.remove('hide');
        }
    } else {
        for (let i = 0; arrow.length > i; i++) {
            arrow[i].classList.add('hide');
        }
    }
}

function increaseNum() {
    let numId = window.event.target.nextElementSibling.id;
    switch (numId) {
        case 'numHours':
            console.log('test');
            console.log(new Date().getMinutes());
            break;
        case 'numMinutes':
            // sss
            break;
        case 'numSeconds':
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




