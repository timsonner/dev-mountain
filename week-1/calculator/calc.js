const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' '); //The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

	
	const mathSymbol = tokens[0]; // plus, minus, etc is first element of array
	const num1 = Number(tokens[1]); // cast 2nd element to a number
	const num2 = Number(tokens[2]); // cast 3rd element to a number

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
    console.log('num2', num2);

if (mathSymbol === "+"){
		console.log(num1 + num2);
  }

if (mathSymbol === "-"){
	console.log(num1 - num2);
}

if (mathSymbol === "*"){
	console.log(num1 * num2);
}

if (mathSymbol === "/"){
	console.log(num1 / num2);
}

// option -v for square root symbol
if (mathSymbol === "√"){
	console.log(Math.sqrt(num1));
}
// This line closes the connection to the command line interface.
	reader.close()

});
