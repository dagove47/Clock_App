
const clock = document.getElementById('clock');
const stopWatch = document.getElementById('stopWatch');
const timer = document.getElementById('timer');
const downArrow = document.getElementsByClassName('downArrow');
const upArrow = document.getElementsByClassName("upArrow");
const number = document.getElementsByClassName("number");

let tensHours = 0;
let unitsHours = 0;
let tensMinutes = 0;
let unitsMinutes = 0;
let tensSeconds = 0;
let unitsSeconds = 0;


// upArrow.addEventListener("click", () => {
//     // number[0].textContent = "1";
//     console.log(upArrow.childElementCount);
// })


function increaseNum() {
    let numId = window.event.target.nextElementSibling.id;
    switch (numId) {
        case 'tensHours':
            console.log('test');
            break;
        case 'unitsHours':
            // sss
            break;
        case 'tensMinutes':
            // sss
            break;
        case 'unitsMinutes':
            // sss
            break;
        case 'tensSeconds':
            // sss
            break;
        case 'unitsSeconds':
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



















