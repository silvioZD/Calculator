var firstNumber;
var secondNumber;

var result;

var roundResult;

function calculator(){

firstNumber=document.getElementById('number1').value;
secondNumber=document.getElementById('number2').value;
if(document.getElementById('plus').checked) {
result = eval(firstNumber)+eval(secondNumber);
document.getElementById("result").style.color = "inherit";
}else if(document.getElementById('minus').checked) {
result = firstNumber-secondNumber;
if (result < 0){ document.getElementById("result").style.color = "#ff0000";}
}
else if(document.getElementById('mnozenje').checked) {
result = firstNumber*secondNumber;
document.getElementById("result").style.color = "inherit";
}
else if(document.getElementById('dijeljenje').checked) {
result = (firstNumber/secondNumber).toFixed(2);
document.getElementById("result").style.color = "inherit";}
document.getElementById('result').innerHTML = result;
};

