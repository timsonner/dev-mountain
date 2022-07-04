/*
Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
*/

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
for (let i = 0; i < array.length; i++) {
  const first = array[i];
  // console.log(`first: ${first}`)

  for (let j = i + 1; j < array.length; j++) {
    const second = array[j];
    // console.log(`second: ${second}`)
    if (first + second === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
