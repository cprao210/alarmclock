// FUNCTION FOR DISPLAYING CURRENT-TIME
var currTime= document.getElementById("current-time");
function currentTime() { 
  let date = new Date(); 
  let hh = formatTime(date.getHours());
  let mm = formatTime(date.getMinutes());
  let ss = formatTime(date.getSeconds());
  const new_month = formatTime(date.getMonth());
  const new_date = formatTime(date.getDate());
  const new_year = formatTime(date.getFullYear());

  let time = hh + ":" + mm + ":" + ss +" date "+ new_date +"-"+new_month+" -"+new_year ;


 currTime.innerText =  hh + ":" + mm + ":" + ss ; 
 if (alarm_List.includes(time)) {
    ringing(time);
    }
}

setInterval(currentTime, 1000);

// ADDING ALARM INPUT FROM USERS
function setAlarmTime(value) {
    alarmTime = value;
}
let alarm_List = [];
const userInput = document.querySelector(".user-input");
userInput.addEventListener("submit", function (e) {
  e.preventDefault();
  const timeToAlarm = new Date(alarmTime)
  const new_h = formatTime(timeToAlarm.getHours());
    const new_m = formatTime(timeToAlarm.getMinutes());
    const new_s = formatTime(timeToAlarm.getSeconds());
    const new_month = formatTime(timeToAlarm.getMonth());
    const new_date = formatTime(timeToAlarm.getDate());
    const new_year = formatTime(timeToAlarm.getFullYear());

  
 

  const new_Alarm = `${new_h}:${new_m}:${new_s} date ${new_date}-${new_month} -${new_year}`;
  if (isNaN(new_Alarm)) {
    if (!alarm_List.includes(new_Alarm)) {
      alarm_List.push(new_Alarm);
      shownew_Alarm(new_Alarm);
    } else {
      alert(`Alarm for ${new_Alarm} already set.`);
    }
  } 
});

function formatTime(time) {
  if (time < 10 ) {
    return "0" + time;
  }
  return time;
}
const myList = document.querySelector(".set-alarms-list");

function shownew_Alarm(new_Alarm) {
  const html = `
    <li class = "time-list">        
        <span class="time">${new_Alarm}</span>
        <button class="deleteAlarm time-control" id="delete-button" onclick = "remove(this.value)" value=${new_Alarm}>Delete Alarm</button>       
    </li>`;
  myList.innerHTML += html;
}

//HANDLING AUDIO TO RING ALARM

const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);
//ADDING LOOP TO CONTINUE ALARM
audio.loop = true;

// RINGS THE AUDIO  AT THE CORRECT TIME AND 3 TIME SNOOZE ALARM AT THE INTERVAL OF 5 MIN
function ringing(time) {
  let x = setInterval(()=>{audio.play()}, 300000); ;
  alert(`Hey! it is ${time}`);
  audio.play();
  setTimeout(function(){
    clearInterval(x);
}, 900001);
}


//FUNCTION FOR STOP THE ALARM
const clearAlarm = () => {
  audio.pause();
  alert("Alarm cleared");
};
 
//FUNCTION FOR STOP THE ALARM
const mylist = document.getElementsByClassName("set-alarms-list");
myList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteAlarm")) {
    e.target.parentElement.remove();
  }
});

// REMOVE ALARM FROM arrayLIST when ("Delete Alarm") BUTTON is clicked
const remove= (value)=>{
let newlist= alarm_List.filter((time)=>{time!=value});;
alarm_List.length=0;
alarm_List.push.apply(alarm_List,newlist)  ;

};
