var p = [true, true, false, false];
var q = [true, false, true, false];

var table = [];
var stringTable = [];

function run(){
	console.log("This is p: " + solveNotTable(p));
	console.log("This is q: " + solveNotTable(q));
	console.log(solveTable(solveNotTable(p), solveNotTable(q), "&&"));
}

function checkAnswer(i){
	breakString();
	var input1 = document.getElementById("test1");
	var boolValue1 = input1.value.toLowerCase() == 'true' ? true : false;

	var input2 = document.getElementById("test2");
	var boolValue2 = input2.value.toLowerCase() == 'true' ? true : false;

	var input3 = document.getElementById("test3");
	var boolValue3 = input3.value.toLowerCase() == 'true' ? true : false;

	var input4 = document.getElementById("test4");
	var boolValue4 = input4.value.toLowerCase() == 'true' ? true : false;


	if(i == 0 && input1 && input1.value != ''){
		if(boolValue1 == table[i] && (input1.value == "false" || input1.value=="true")){
			document.getElementById("solutionSlot1").innerHTML = "Correct! Good job!";
		}
		else{
			document.getElementById("solutionSlot1").innerHTML = "Incorrect, try again.";
		}
	}

	else if(i == 1 && input2 && input2.value != ''){
		if(boolValue2 == table[i] && (input2.value == "false" || input2.value=="true")){
			document.getElementById("solutionSlot2").innerHTML = "Correct! Good job!";
		}
		else{
			document.getElementById("solutionSlot2").innerHTML = "Incorrect, try again.";
		}
	}

	else if(i == 2 && input3 && input3.value != ''){
		if(boolValue3 == table[i] && (input3.value == "false" || input3.value=="true")){
			document.getElementById("solutionSlot3").innerHTML = "Correct! Good job!";
		}
		else{
			document.getElementById("solutionSlot3").innerHTML = "Incorrect, try again.";
		}
	}

	else if(i == 3 && input4 && input4.value != ''){
		if(boolValue4 == table[i] && (input4.value == "false" || input4.value=="true")){
			document.getElementById("solutionSlot4").innerHTML = "Correct! Good job!";
		}
		else{
			document.getElementById("solutionSlot4").innerHTML = "Incorrect, try again.";
		}
	}
	else{

	}
}

function createTable(count){
	count = Number(count);

	if(count >= stringTable.length){
		return null;
	}

	else if(stringTable[Number(count)] == "!" && stringTable[Number(count) + Number(1)] == "("){
		return (solveNotTable(createTable(Number(count) + Number(1))));
	}

	else if(stringTable[Number(count)] == "!"){

		if(stringTable[Number(count) + Number(3)] == "("){
			return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), createTable(Number(count) + Number(3)), stringTable[Number(count) + Number(2)]);
		}

		else if(stringTable[Number(count) + Number(3)] == "!" && stringTable[Number(count) + Number(4)] == "("){
			return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), solveNotTable(createTable(Number(count) + Number(4))), stringTable[Number(count) + Number(2)]);
		}

		else if(stringTable[Number(count) + Number(3)] == "!"){
			if(stringTable[Number(count) + Number(2)] == "&&"){
				return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), solveNotTable(stringTable[Number(count) + Number(4)]), "&&");
			}
			else if(stringTable[Number(count) + Number(2)] == "||"){
				return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), solveNotTable(stringTable[Number(count) + Number(4)]), "||");
			}
		}

		else{
			return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), stringTable[Number(count) + Number(3)], stringTable[Number(count) + Number(2)]);
		}

		return solveTable(solveNotTable(stringTable[Number(count) + Number(1)]), createTable(Number(count) + Number(3)), stringTable[Number(count) + Number(2)]);
	}

	else if((stringTable[Number(count)] == "(") && (stringTable[Number(count) + Number(1)]) == "("){//this
		return createTable(Number(count) + Number(1));
	}

	else if(stringTable[count] == "(" && stringTable[Number(count) + Number(1)] == "!"){ 
		return(createTable(Number(count) + Number(1)));
	}

	else if(stringTable[Number(count)] == "("){
		var table1 = stringTable[Number(count) + Number(1)];
		var table2 = stringTable[Number(count) + Number(3)];
		var comparison = stringTable[Number(count) + Number(2)];
		var next;

		if(table2 == "("){
			return solveTable(table1, createTable(Number(count) + Number(3)), comparison);
		}

		if(table2 == "!"){
			return solveTable(table1, createTable(Number(count) + Number(3)),comparison)
		}

		if(Number(count) + Number(4) < stringTable.length){
			if(stringTable[Number(count) + Number(4)] == ")"){
				if(Number(count) + Number(5) < stringTable.length){
					if(stringTable[Number(count) + Number(5)] == "||"){
						next = "||";
						if(table1 == "p" && table2 == "q"){
							return solveTable(solveTable(p, q, comparison), createTable(Number(count) + Number(6)), next);
						}

						else if(table2 == "p" && table2 == "p"){
							return solveTable(solveTable(p, p, comparison), createTable(Number(count) + Number(6)), next);
						}

						else if(table2 == "q" && table2 == "q"){
							return solveTable(solveTable(q, q, comparison), createTable(Number(count) + Number(6)), next);
						}
						else{
							return;
						}
					}

					else if(stringTable[Number(count) + Number(5)] == "&&"){
						next = "&&";
						if(table1 == "p" && table2 == "q"){
							return solveTable(solveTable(p, q, comparison), createTable(Number(count) + Number(6)), next);
						}

						else if(table2 == "p" && table2 == "p"){
							return solveTable(solveTable(p, p, comparison), createTable(Number(count) + Number(6)), next);
						}

						else if(table2 == "q" && table2 == "q"){
							return solveTable(solveTable(q, q, comparison), createTable(Number(count) + Number(6)), next);
						}
						else{
							return;
						}
					}
				}
				if(table1 == "p" && table2 == "q"){
					return solveTable(p, q, comparison);
				}

				else if(table2 == "p" && table2 == "p"){
					return solveTable(p, p, comparison);
				}

				else if(table2 == "q" && table2 == "q"){
					return solveTable(q, q, comparison);
				}
			}
		}

		else{
			return;
		}
	}

	else{

	}
}


function solveTable(one, two, comp){
	if(one == "p"){
		one = p;
	}

	else if(one == "q"){
		one = q;
	}

	if(two == "p"){
		two = p;
	}
	else if(two == "q"){
		two = q;
	}

	var t = [];
	for(var i = 0; i < 4; i++){
		if(comp === "&&"){
			t.push((one[i] && two[i]));
		}
		else if(comp === "||"){
			t.push((one[i] || two[i]));
		}
	}
	return t;
}

function solveNotTable(a){
	if(a == "p"){
		a = p;
	}
	else if(a == "q"){
		a = q;
	}

	var t = [];
	for(var i = 0; i < 4; i++){
		t.push(!a[i]);
	}
	return t;
}

function breakString(){
	var a = document.getElementById("tableText").value;
	stringTable = [];

	for(var i = 0; i < a.length; i++){
		if(a.charAt(i) == " "){

		}
		else if(a.charAt(i) == "|"){
			if(a.charAt(i+1) == "|"){
				stringTable.push("||");
			}
		}
		else if(a.charAt(i) == "&"){
			if(a.charAt(i+1) == "&"){
				stringTable.push("&&");
			}
		}
		else if(a.charAt(i) == "p"){
			stringTable.push("p");
		}
		else if(a.charAt(i) == "q"){
			stringTable.push("q");
		}
		else if(a.charAt(i) == "("){
			stringTable.push("(");
		}
		else if(a.charAt(i) == ")"){
			stringTable.push(")");
		}
		else if(a.charAt(i) == "!"){
			stringTable.push("!");
		}

	}

	table = createTable(0);
	console.log(table);
}