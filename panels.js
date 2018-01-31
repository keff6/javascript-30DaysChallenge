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