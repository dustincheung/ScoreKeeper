//getting button objects from html doc
var p1Butt = document.querySelector("#p1");
var p2Butt = document.querySelector("#p2");
var resetButt = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var inputNum = document.querySelector("input");
var maxDisplay = document.querySelector("#maxDisplay");

//vars that dictate if max score is reached
var gameDone = false;
var maxScore = 0;

//vars that store the score of each player
var p1score = 0;
var p2score = 0;

p1Butt.addEventListener("click", function(){
	if(!gameDone){
		p1score++;
		if(p1score === maxScore){
			p1Display.classList.add("won");
			gameDone = true;
		}
		p1Display.textContent = p1score;
	}
});

p2Butt.addEventListener("click", function(){
	if(!gameDone){
		p2score++;
		if(p2score === maxScore){
			p2Display.classList.add("won");
			gameDone = true;
		}
		p2Display.textContent = p2score;
	}
});

resetButt.addEventListener("click", resetScore);

inputNum.addEventListener("change", function(){
	maxScore = Number(inputNum.value);
	maxDisplay.textContent = inputNum.value;
	resetScore();
});

function resetScore(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("won");
	p2Display.classList.remove("won");
	gameDone = false;
}

