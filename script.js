const monthsEl = document.querySelector('#months');
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const futureDate = new Date("1 Jan 2024");

function countdown() {
    const currDate = new Date();
    const totalSeconds = (futureDate - currDate) / 1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const months = Math.floor((totalSeconds / 3600 / 24 / 30) % 12);

    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time;
    }
}

countdown();

setInterval(countdown, 1000);