function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop

  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add('playing');  
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return; // skip it if not a transform  
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);

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