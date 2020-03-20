var index = 0;
var upperBound = 256;
var lowerBound = 0;

function generateBinNum(){
	if(document.getElementById("upperBound") && document.getElementById("upperBound").value != ''){
		upperBound = document.getElementById("upperBound").value;
	}
	else{
		upperBound = 256;
	}

	if(document.getElementById("lowerBound") && document.getElementById("lowerBound").value != ''){
		lowerBound = document.getElementById("lowerBound").value;
	}
	else{
		lowerBound = 0;
	}

	index = Math.floor(Math.random() * upperBound + lowerBound);

	document.getElementById("numSlot").innerHTML = (index >>> 0).toString(2);
	document.getElementById("solutionSlot10").innerHTML = "";
	document.getElementById("solutionSlotHex").innerHTML = "";
	document.getElementById("solutionSlotBinary").innerHTML = "";
}

function generateHexNum(){
	if(document.getElementById("upperBound") && document.getElementById("upperBound").value != ''){
		upperBound = document.getElementById("upperBound").value;
	}
	else{
		upperBound = 256;
	}


	if(document.getElementById("lowerBound") && document.getElementById("lowerBound").value != ''){
		lowerBound = document.getElementById("lowerBound").value;
	}
	else{
		lowerBound = 0;
	}
	

	index = Math.floor(Math.random() * upperBound + lowerBound);

	document.getElementById("numSlot").innerHTML = (hexString = index.toString(16));

	document.getElementById("solutionSlot10").innerHTML = "";
	document.getElementById("solutionSlotHex").innerHTML = "";
	document.getElementById("solutionSlotBinary").innerHTML = "";
}

function generate10Num(){
	if(document.getElementById("upperBound") && document.getElementById("upperBound").value != ''){
		upperBound = document.getElementById("upperBound").value;
	}
	else{
		upperBound = 256;
	}


	if(document.getElementById("lowerBound") && document.getElementById("lowerBound").value != ''){
		lowerBound = document.getElementById("lowerBound").value;
	}
	else{
		lowerBound = 0;
	}
	

	index = Math.floor(Math.random() * upperBound + lowerBound);

	document.getElementById("numSlot").innerHTML = index;

	document.getElementById("solutionSlot10").innerHTML = "";
	document.getElementById("solutionSlotHex").innerHTML = "";
	document.getElementById("solutionSlotBinary").innerHTML = "";
}



function checkAnswer10(){
	var input = document.getElementById("conversionInput10");

	if(input && input.value != '' && input.value == index){
		document.getElementById("solutionSlot10").innerHTML = "Correct! Good job!";
	}
	else{
		document.getElementById("solutionSlot10").innerHTML = "Incorrect, try again.";
	}

}

function checkAnswerHex(){
	var input = document.getElementById("conversionInputHex");

	if(input && input.value != '' && parseInt(input.value, 16) == index){
		document.getElementById("solutionSlotHex").innerHTML = "Correct! Good job!";
	}
	else{
		document.getElementById("solutionSlotHex").innerHTML = "Incorrect, try again.";
	}

}

function checkAnswerBinary(){
	var input = document.getElementById("conversionInputBinary");

	if(input && input.value != '' && parseInt(input.value, 2) == index){
		document.getElementById("solutionSlotBinary").innerHTML = "Correct! Good job!";
	}
	else{
		document.getElementById("solutionSlotBinary").innerHTML = "Incorrect, try again.";
	}

}