const countdownElement = document.querySelector('countdown'),
      items = document.querySelectorAll('.countdown-item > h4');


let countdownDate = new Date(2025,0,1,10,0,0).getTime();

function getCountTime (){
const now = new Date().getTime();
const distance = countdownDate - now;

const oneDay  = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = Math.floor((distance/oneDay));
let hours = Math.floor((distance % oneDay) / oneHour);
let minutes = Math.floor((distance % oneHour) / oneMinute);
let seconds = Math.floor((distance % oneMinute) / 1000);


let values = [days,hours,minutes,seconds];

items.forEach((item,i) =>{
    item.textContent = values[i];
});

if(distance < 0){
    clearInterval(countdown);
    countdownElement.innerHTML = '<h4 class="end">Время вышло. Как успехи ?</h4>'
}
}

let countdown = setInterval(getCountTime,1000);

getCountTime();