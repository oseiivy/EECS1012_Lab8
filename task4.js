/* Task4.js - Add your Java Script Code Here */
function RollDice(){
    var num1 = Math.floor(Math.random()* 6)+1;
    var num2 = Math.floor(Math.random()* 6)+ 1;
    var num3 = Math.floor(Math.random()* 6)+ 1;
    var num4 = Math.floor(Math.random()* 6)+ 1;
    var num5 = Math.floor(Math.random()* 6)+ 1;
    var num6 = Math.floor(Math.random()* 6)+ 1;
    var average = (num1 + num2 + num3 + num4 + num5 + num6)/6;
    document.getElementById("mydata").innerHTML = num1 + " " + num2 + ", " + num3 + " " + num4 + ", " + num5 + " " + num6 + "<br> " + "Average = " + average.toFixed(2) ;
}