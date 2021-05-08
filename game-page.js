var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

var player1sc = 0;
var player2sc = 0;

var numb1 = document.getElementById("player1").value
var numb2 = docuent.getElementById("player2").value

document.getElementById("name1").innerHTML = player1 + " : ";
document.getElementById("output1").innerHTML = player1sc;


document.getElementById("name2").innerHTML = player2 + " : ";
document.getElementById("output2").innerHTML = player2sc;


document.getElementById("player-ques").innerHTML = player1;
document.getElementById("player-ans").innerHTML = player2;

function send(){
	var actual_ans = parseInt(numb1) * parseInt(numb2);
	var design = "<div style = 'display: inline-block; border-radius: 20px; background-color: white; padding-right: 40px; padding-left: 40px;'> <label>" + numb1 + " X " + numb2 + "</label><input type = 'number' placeholder = 'enter number' style="top: 10px;"><button type='button' style='display: inline-block; background-color: cyan; padding-right: 30px; padding-left: 30px; padding-top: 5px; padding-bottom: 5px; top: 10px; border-radius: 10px;'>Check</button></button></div>";
	document.getElementById("output").innerHTML = "<div style = 'display: inline-block; border-radius: 20px; background-color: white; padding-right: 40px; padding-left: 40px;'> <label>" + numb1 + " X " + numb2 + "</label><input type = 'number' placeholder = 'enter number' style="top: 10px;"><button type='button' style='display: inline-block; background-color: cyan; padding-right: 30px; padding-left: 30px; padding-top: 5px; padding-bottom: 5px; top: 10px; border-radius: 10px;'>Check</button></button></div>";
	document.getElementById("player1").value = " ";
	document.getElementById("player2").value = " ";
}
