/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  Math.random();
  if (Math.random()>=0.5){
    document.getElementById("mydata").innerHTML = "tails";
  } else{
    document.getElementById("mydata").innerHTML = "heads";
  }
}
