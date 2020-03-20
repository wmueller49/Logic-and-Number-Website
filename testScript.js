var timer = document.getElementById("timer");
var seconds = 0;
var bestSeconds = -1;
var minutes = 0;
var bestMinutes = -1;
var count;
var answered = true;
var answer;
var a;

var questions = ["What is 2^0", "What is 2^1", "What is 2^2", "What is 2^3", "What is 2^4", "What is 2^5", "What is 2^6", "What is 2^7", "What is 2^8", "What is 2^9", "What is 2^10", "What is 16^2", "Put in binary: 0", "Put in binary: 1", "Put in binary: 2", "Put in binary: 3", "Put in binary: 4", "Put in binary: 5", "Put in binary: 6"," Put in binary: 7", "Put in binary: 8", "Put in binary: 9", "Put in binary: 10", "Put in binary: 11", "Put in binary: 12", "Put in binary: 13", "Put in binary: 14", "Put in binary: 15"];
var copyQuestions = [];
var answers = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 256, 0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111];
var copyAnswers = [];
var index = 0;

function runClock(){
	seconds++;

	if(seconds < 10){
		seconds = "0" + seconds.valueOf();
	}
	else if(seconds >=60){
		minutes++;
		seconds = "00";
	}

	document.getElementById("timer").innerHTML = minutes + ":" + seconds;
	count = setTimeout(runClock, 1000);
	
}

function stopClock(){
	clearTimeout(count);
	if(seconds < 10){
		seconds = seconds.valueOf();
	}

	if(bestSeconds == -1){
		bestSeconds = seconds;
	}

	if(bestMinutes == -1){
		bestMinutes = minutes;
	}

	else if(minutes < bestMinutes){
		bestMinutes = minutes;
	}

	else if(seconds < bestSeconds){
		bestSeconds = seconds;
	}

	document.getElementById("bestTime").innerHTML = "Best time: " + bestMinutes + ":" + bestSeconds;
}

function reset(){
	clearTimeout(count);
	questions = questions.concat(copyQuestions);
	answers = answers.concat(copyAnswers);
	document.getElementById("question").innerHTML = "";

	seconds = 0;
	minutes = 0;
	document.getElementById("timer").innerHTML = "00:00";
}

function test(){
	index = Math.floor(Math.random() * questions.length);
	if(index == questions.length){
		stopClock();
		questions = copyQuestions;
		answers = copyAnswers;
		document.getElementById("solutionSlot").innerHTML = "Congrats! You passed!";
		document.getElementById("question").innerHTML = "";
	}

	else{
		var c = questions.splice(index, 1);
		copyQuestions.push(c);
		document.getElementById("question").innerHTML = c;
	}
}

function isCorrect(){
	if(document.getElementById("answer").value != ''){
		answer = document.getElementById("answer").value;
		if(answered){
			a = answers.splice(index, 1);
			copyAnswers.push(a);
			answered = false;
		}

		if(answer == a){
			document.getElementById("solutionSlot").innerHTML = "";
			test();
			answered = true;
		}
		else{
			document.getElementById("solutionSlot").innerHTML = "Incorrect, try again.";
			answered = false;
		}
	}
}