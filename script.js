
var x="";

function makeBubble(){
    for(var i=1;i<=102;i++){
        var rn=Math.floor(Math.random()*10);
     x+=`<div class="bubble">${rn}</div>`;
     
    
    }
    document.querySelector("#pbot").innerHTML=x;
}
makeBubble();
var timer=60;
   
function setTimer(){
   var timerint= setInterval(function(){
  if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;
  
  }
  else{
    clearInterval(timerint);
    document.querySelector("#pbot").textContent="";
  }
    

    },1000);
         
    
}

setTimer();
var hitrn=0;
  
function onHit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
onHit();

var score=0;
  function scoreInc(){
    score+=10;
    document.querySelector("#scoreplus").textContent=score;
  }
  scoreInc();


  document.querySelector("#pbot").addEventListener("click",function(e){
    var clicked=Number(e.target.textContent);
      if(clicked==hitrn){
        scoreInc();
        makeBubble();
        onHit();

      }

  });