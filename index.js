/*************************************************************
Simple rolling calculator using basic operators

@author Nathan Colosimo
@version Fall 2021
*************************************************************/

//Initialize readline process for user input
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//Initialize the output
var output = 0;

/*************************************************************
Nested questions with a switch statement to check the outer
function operator, then either complete math and output 
current total or exit with q while displaying final output
*************************************************************/

rl.question("Enter operation (+-*/, q to quit): ", function(operation) {
	rl.question("Enter value: ", function(value) {
	
	switch(operation) {
		case "*":
			output *= value;
			console.log(`Current total: ${output}`);
		case "/":
			if(value != 0) {
				output /= value;
			}
			else {
				console.log(`Cannot divide by zero`);
			}
			console.log(`Current total: ${output}`);
		case "-":
			output -= value;
			console.log(`Current total: ${output}`);
		case "+":
			output += value;
			console.log(`Current total: ${output}`);
		case "q":
			console.log(`Final value: ${output}`);
			process.exit(0);
		default:
			console.log(`Operation does not exist, please pick an available operator`);
	}
	});
});
