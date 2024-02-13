const minutesLable =document.getElementById('minutes');
const secoundLbleLable =document.getElementById('seconds');
const millSecoundLable =document.getElementById('millisec');
const startButton=document.getElementById('startButton');
const stopButton=document.getElementById('stopButton');
const pauseButton=document.getElementById('pausrButton');
const restButton=document.getElementById('restButton');

const sessionList=document.getElementById('sessionlist');

let minutes =0;
let seconds=0;
let milliSecound =0;
let interval;

startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);
pauseButton.addEventListener('click',pauseTimer);
restButton.addEventListener('click',restTimer);

function startTimer(){
   interval= setInterval(updateTimer,10);
    startButton.disabled =true;

}
function stopTimer(){
  clearInterval(interval);
  addToSessionList();
  resetTimerData();
  startButton.disabled =false;


}
function pauseTimer(){
    clearInterval(interval);
    
    startButton.disabled=false;
}
function restTimer(){
clearInterval(interval);
resetTimerData();
startButton.disabled=false;

}
function updateTimer(){
    milliSecound++;
    if(milliSecound === 100){  //// 1000  -> 1 seconds = 1000 millseconds
        milliSecound = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();

}
function displayTimer(){
millSecoundLable.textContent=padTime(milliSecound);
secoundLbleLable.textContent=padTime(seconds);
minutesLable.textContent=padTime(minutes);
}

 function padTime(time){
return time.toString().padStart(2,'0');
 }
 function resetTimerData(){
    minutes=0;
    seconds=0;
    milliSecound = 0;
    displayTimer();
 }
 function addToSessionList(){
    const sessionTimer =  `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliSecound)}`;
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>sesson: ${sessionList.childElementCount + 1}: </span>${sessionTimer}`;
    sessionList.appendChild(listItem);
}