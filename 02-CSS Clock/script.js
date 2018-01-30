const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate(){
  const now = new Date();
  
  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
  // Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  
}

setInterval(setDate,1000);

/* Left Panel */
var show =  document.getElementById('show-info');
var left = document.querySelector('.left-panel');

show.addEventListener('click',function(){
  left.classList.toggle('show');
  
  if(this.innerHTML === "More"){
    this.innerHTML = "Less";
  }else{
    this.innerHTML = "More";
  }
});