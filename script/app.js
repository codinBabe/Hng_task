const day = document.querySelector('.day');
const time = document.querySelector('.time');


const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

day.innerHTML = `Day: ${Days[new Date().getDay()]}`
function updateTime() {
    time.innerHTML = `Time: ${new Date().getTime()}`;
};
setInterval(updateTime, 1000);