/* Task3.js - Add your Java Script Code Here */
var sum = 0;

function five(){
    sum = sum + 0.05;
    var output = "Amount = $"+ sum.toFixed(2);
    document.getElementById("mydata").innerHTML = output;
}

function ten(){
    sum = sum + 0.10;
    var output = "Amount = $"+ sum.toFixed(2);
    document.getElementById("mydata").innerHTML = output;
}

function twentyfive(){
    sum = sum + 0.25;
    var output = "Amount = $"+ sum.toFixed(2);
    document.getElementById("mydata").innerHTML = output;
}

function one(){
    sum = sum + 1.00;
    var output = "Amount = $"+ sum.toFixed(2);
    document.getElementById("mydata").innerHTML = output;
}

function two(){
    sum = sum + 2.00;
    var output = "Amount = $"+ sum.toFixed(2);
    document.getElementById("mydata").innerHTML = output;
}

