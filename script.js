var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function defaultGradient(){
	color1.value = "#FF0000";
	color2.value = "#FFFF00";
		css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randomColor(){
	
function randomColor1(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + randomColor;
	console.log(color1.value);
}
function randomColor2(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + randomColor;
	console.log(color2.value);
}
console.log(" wwwww");
randomColor1();
randomColor2();
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", defaultGradient);

randomBtn.addEventListener("click", randomColor);