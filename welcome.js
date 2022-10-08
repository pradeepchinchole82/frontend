
setTimeout(hello,5000);


function hello(){
    document.writeln("HEllo World!!!");
}




function welcome(){

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
}