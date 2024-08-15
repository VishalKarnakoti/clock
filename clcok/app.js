//calling the function
setInterval(showTime,1000);
//
function showTime(){
  let time=new Date()
  let hour=time.getHours();
  let minutes=time.getMinutes();
  let sec=time.getSeconds();
  AM_PM="AM";


//we are creating the clock in the 12 hour format
if (hour>=12){
  if(hour>12)
    hour-=12;
  AM_PM="PM";
  
}
else if(hour==0){
  hr=12;
  AM_PM="AM";
}
hour=hour<10?"0"+hour:hour;
minutes=minutes<10?"0"+minutes:minutes;
sec=sec<10?"0"+sec:sec;

let currentTime =
hour +
":" +
minutes +
":" +
sec +
AM_PM;
document.getElementById("clock").innerHTML=currentTime;}
showTime();