"use strict"
// 1
const hourEl = document.querySelector('#hourElement');
let minutes = 60;
const hourInterval = setInterval(() => {
minutes--;
hourEl.textContent = minutes;
if (minutes === 30){
    alert('Less than a half left');
}
if (minutes === 0){
    clearInterval(hourInterval);
    hourEl.textContent = 0;
}
}, 60000);
// 2
const startBtn = document.querySelector('#startBtn');
const secEl = document.querySelector('#secElement');
let seconds = 30;
startBtn.addEventListener('click' , (e) => {
    startBtn.disabled = true;
    secInterval();
})
const secInterval = setInterval(() => {
seconds--;
secEl.textContent = seconds;
if (seconds === 10){
    secEl.style.transform = 'rotateY(360deg)'
}
if (seconds === 0){
    clearInterval(secInterval);
    secEl.textContent = 0;
    startBtn.disabled = false;
}
}, 1000);