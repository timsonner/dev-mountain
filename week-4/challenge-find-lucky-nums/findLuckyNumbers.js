/*
Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)

*/

// Write your code below this line.

function getRandomIntInclusive(n) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 10) + 1; // + 1 ensures no 0 gets returned
  }
  let intRandom = generateRandomInt(); // initialize with a random number
  console.log(`Set intRandom to: ${intRandom}`);
  let arrayRandomInts = []; // initialize as undefined
  // for n number of times
  for (let index = 0; index < n; index++) {
    // while loop ensures no duplicate elements in array
    while (arrayRandomInts.includes(intRandom) && n <= 10) {
      console.log(`Current intRandom: ${intRandom}`);
      console.log(`Does arrayRandomInts include ${intRandom}?: true`);
      intRandom = generateRandomInt(); // do this until condition is false (until arrayOfInts doesn't contain intRandom)
      console.log(`Set intRandom to: ${intRandom}`);
    }
    console.log(`Does arrayRandomInts include ${intRandom}?: false`);
    console.log(`🟢 Push ${intRandom} to arrayRandomInts...`);
    arrayRandomInts.push(intRandom);
  }
  return arrayRandomInts;
}

console.table(getRandomIntInclusive(7));
