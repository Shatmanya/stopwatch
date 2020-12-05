let sec=0;
let min=0;
let hrs=0;
//display values of stopwatch
let displaysec=0;
let displaymin=0;
let displayhrs=0;

//var to hold set interval function
var interval=null;

//define wheter stopwatch start or not
let status="stopped";

//stopwatch function for increment

function stopwatch(){

  sec++;
  //logic of increment
  if(sec/60===1){
    sec=0;
    min++;
    if(min/60 ===1){
      min=0;
      hrs++;
    }
  }
  //to display extra 0 in time less then two digits
  //for seconds
  if(sec<10)
  {
    displaysec="0"+sec.toString();
  }
  else{
    displaysec=sec;
  }
  //for minutes
  if(min<10){
    displaymin="0"+min.toString();
  }
  else{
    displaymin=min;
  }
  //for hours
  if(hrs<10){
    displayhrs="0"+hrs.toString();
  }
  else{
    displayhrs=hrs;
  }

  //display update time values

  document.getElementById("timer").innerHTML= displayhrs+":"+displaymin+":"+displaysec;
}


function startstop(){
    if(status==="stopped"){
      interval=window.setInterval(stopwatch,1000);
      document.getElementById("startstop").innerHTML="stop";
      status="started";
    }
    else{
      window.clearInterval(interval);
      document.getElementById("startstop").innerHTML="start";
      status="stopped";
    }
}
//function to reset the stopwatch

function reset(){
  
  window.clearInterval(interval);
  sec=0;
  min=0;
  hrs=0;
  document.getElementById("timer").innerHTML="00:00:00";
  document.getElementById("startstop").innerHTML="start";
}