const day = document.querySelector(".days-c");
const hour = document.querySelector(".hours-c");
const min= document.querySelector(".mins-c");
const sec = document.querySelector(".secs-c");


const newYearDate = "12 December 2024";
function countdown(){
    const currDate = new Date();
    const targetDate = new Date(newYearDate);
    const totalSec = (targetDate - currDate) /1000;

    const days = Math.floor((totalSec /3600)/24);
    const hours = Math.floor((totalSec /3600)%24);
    const mins = Math.floor((totalSec /60)%60);
    const secs = Math.floor((totalSec %60));
     

    day.innerHTML = formatTime(days);
    hour.innerHTML =formatTime(hours);
    min.innerHTML =formatTime(mins);
    sec.innerHTML =formatTime(secs);

}

function formatTime(time){
   return time < 10 ? `0${time}` : time;
}
setInterval(countdown,1000);