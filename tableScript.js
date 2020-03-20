var p = [true, true, false, false];
var q = [true, false, true, false];

var table = [];
var stringTable = [];

function run(){
	console.log(!(p[1]));
	console.log(!p);
	solveNotTable(p, "!");
}

function createTable(count){
	count = Number(count);

	if(count >= stringTable.length){
		return null;
	}

	else if(stringTable[Number(count)] == "!"){
		return (solveNotTable(createTable(Number(count) + Number(1)), "!"));
	}

	else if((stringTable[Number(count)] == "(") && (stringTable[Number(count) + Number(1)]) == "("){
		return createTable(Number(count) + Number(1));
	}

	else if(stringTable[count] == "(" && stringTable[Number(count) + Number(1)] == "!"){ 
		return(solveNotTable(createTable(Number(count) + Number(2)), "!"));
	}

	else if(stringTable[Number(count)] == "("){
		var table1 = stringTable[Number(count) + Number(1)];
		var table2 = stringTable[Number(count) + Number(3)];
		var comparison = stringTable[Number(count) + Number(2)];
		var next;

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


function solveTable(a, b, comp){
	var t = []
	for(var i = 0; i < p.length; i++){
		if(comp === "&&"){
			t.push((p[i] && q[i]));
		}
		else if(comp === "||"){
			t.push((p[i] || q[i]));
		}
	}
	return t;
}

function solveNotTable(a, not){
	
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

	console.log(createTable(0));
}