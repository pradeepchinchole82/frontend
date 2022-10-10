


    document.writeln("HEllo World!!!");



function goToGoogle(){
    window.open("http://www.google.com","new");
}


var interval=setInterval(showTime,1000);


setTimeout(clearTimer,10000);


function clearTimer(){
    clearInterval(interval);
}

function showTime(){
    document.getElementById("time").innerHTML="Time is :"+new Date();
}




    function showWindowDetails(){

alert("Width :"+window.outerWidth+", Height "+window.innerWidth);

    }

var isFlag=confirm("Do you want to Login?");

if(isFlag){

var user=prompt("Enter your name :","Pradeep");

if(user=='Pradeep')
window.alert("Hello "+user+"!! Welcome To JavaScript");
else
window.alert("Invlaid User");
}
else
alert("Good Bye !! See you");

console.log("Welcome To JavaScript");
window.document.writeln("<h2>Hi All, Welcome To Java Script</h2>");
