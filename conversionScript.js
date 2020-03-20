var index = 0;

var binaryNums = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];
var hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function generateBinNum(){
	index = Math.floor(Math.random() * 15);
	document.getElementById("numSlot").innerHTML = (binaryNums[index]);
	document.getElementById("solutionSlot10").innerHTML = "";
	document.getElementById("solutionSlotHex").innerHTML = "";
	document.getElementById("solutionSlotBinary").innerHTML = "";
}

function generateHexNum(){
	index = Math.floor(Math.random() * 15);
	document.getElementById("numSlot").innerHTML = (hexNums[index]);
	document.getElementById("solutionSlot10").innerHTML = "";
	document.getElementById("solutionSlotHex").innerHTML = "";
	document.getElementById("solutionSlotBinary").innerHTML = "";
}

function generate10Num(){
	index = Math.floor(Math.random() * 15);
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

	if(input && input.value != '' && input.value == hexNums[index]){
		document.getElementById("solutionSlotHex").innerHTML = "Correct! Good job!";
	}
	else{
		document.getElementById("solutionSlotHex").innerHTML = "Incorrect, try again.";
	}

}

function checkAnswerBinary(){
	var input = document.getElementById("conversionInputBinary");

	if(input && input.value != '' && input.value == binaryNums[index]){
		document.getElementById("solutionSlotBinary").innerHTML = "Correct! Good job!";
	}
	else{
		document.getElementById("solutionSlotBinary").innerHTML = "Incorrect, try again.";
	}

}