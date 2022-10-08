const perf = require('execution-time')()

let arrayOfResults = []

// takes three parameters, a function, an array, and a string
// example: performAnalysis(doublerAppend, tinyArray, "tinyArray")

const performAnalysis = (functionToTest, parameters, parameterName) => {
  perf.start() // start the timer
  functionToTest(parameters) // our parameters in action
  let output = perf.stop() // stop the timer. output becomes an object
  output.name = `${functionToTest.name}(${parameterName})` // this property defaults to 'default' if you don't set it, string parameter used here
  arrayOfResults.push(output) // push object to array
}

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.
let addToZero = (array) => {
  let addsToZero = false
  // check if parameters less than 2 items
  if (array.length < 2) {
    return false
  }

  for (let i = 0; i < array.length; i++) {
    const first = array[i]
    for (let j = i + 1; j < array.length; j++) {
      const second = array[j]
      if (first + second === 0) {
        addsToZero = true
      }
    }
  }
  return addsToZero
}
// For example:
console.log('addToZero()')

console.log(addToZero([]))
// 'addToZero([])'       │ 0.070105 │  '70 μs'  │ '70.105 μs'  │ '70 microseconds 105 nanoseconds' │
// -> False
console.log(addToZero([1]))
// -> False
// 'addToZero([1])'      │ 0.007763 │ '7.76 μs' │  '7.763 μs'  │ '7 microseconds 763 nanoseconds'  │
console.log(addToZero([1, 2, 3]))
// -> False
// 'addToZero([1, 2, 3])'   │ 0.009333 │ '9.33 μs' │  '9.333 μs'  │ '9 microseconds 333 nanoseconds'  │
console.log(addToZero([1, 2, 3, -2]))
// -> True
// 'addToZero([1, 2, 3, -2])' │ 0.002536 │ '2.54 μs' │  '2.536 μs'  │ '2 microseconds 536 nanoseconds'  │

performAnalysis(addToZero, [], '[]')
performAnalysis(addToZero, [1], '[1]')
performAnalysis(addToZero, [1, 2, 3], '[1, 2, 3]')
performAnalysis(addToZero, [1, 2, 3, -2], '[1, 2, 3, -2]')

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
const hasUniqueChars = (string) => {
  let array = string.split(``)
  let hasUniqueChars = true
  for (let i = 0; i < array.length; i++) {
    const first = array[i]
    // console.log(`first: ${first}`)
    for (let j = i + 1; j < array.length; j++) {
      const second = array[j]
      //   console.log(`second: ${second}`)
      if (first === second) {
        // console.log(true);
        hasUniqueChars = false
      } else {
        // console.log(false);
      }
    }
  }
  //   console.log(`hasUniqueChars: ${hasUniqueChars}`)
  return hasUniqueChars
}
// For example:

console.log('hasUniqueChars()')
console.log(hasUniqueChars('Monday'))
// -> True
// 'hasUniqueChars(Monday)'  │       0.00466        │ '4.66 μs' │  '4.66 μs'   │ '4 microseconds 660 nanoseconds'
console.log(hasUniqueChars('Moonday'))
// -> False
// 'hasUniqueChars(Moonday)'  │       0.002784       │ '2.78 μs' │  '2.784 μs'  │ '2 microseconds 784 nanoseconds'
performAnalysis(hasUniqueChars, 'Monday', 'Monday')
performAnalysis(hasUniqueChars, 'Moonday', 'Moonday')

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (string) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz'
  const regex = /\s/g // '\s' is whitespace, '/g' is global, so find all whitespace
  const sanitizedString = string.toLowerCase().replace(regex, '') // replace all whitespace with ""

  for (let i = 0; i < chars.length; i++) {
    if (sanitizedString.indexOf(chars[i]) === -1) {
      // indexOf() returns -1 when it can't find an index
      return false
    }
  }
  // indexOf() found all chars in the string
  return true
}
// For example:

console.log('isPangram()')
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
// -> True
// 'isPangram(The quick brown fox jumps over the lazy dog!)' │ 0.006974999999999999  │ '6.97 μs' │  '6.975 μs'  │ '6 microseconds 975 nanoseconds'  │
console.log(isPangram('I like cats, but not mice'))
// -> False
// 'isPangram(I like cats, but not mice)'           │ 0.0036079999999999997 │ '3.61 μs' │  '3.608 μs'  │ '3 microseconds 608 nanoseconds'  │
performAnalysis(
  isPangram,
  'The quick brown fox jumps over the lazy dog!',
  'The quick brown fox jumps over the lazy dog!'
)
performAnalysis(
  isPangram,
  'I like cats, but not mice',
  'I like cats, but not mice'
)

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (array) => {
  let longest = 0
  array.forEach((element) => {
    if (element.length > longest) {
      longest = element.length
    }
  })
  return longest
}
// For example:
console.log('findLongestLength()')
console.log(findLongestWord(['hi', 'hello']))
// -> 5
// 'findLongestWord(["hi", "hello"])'             │ 0.0060019999999999995 │  '6 μs'   │  '6.002 μs'  │  '6 microseconds 2 nanoseconds'   │
performAnalysis(findLongestWord, ['hi', 'hello'], `["hi", "hello"]`)
// Be sure to add this file to your Github repo for this project.

// Extra Credit
// List out the space complexity of each solution in Step 2.
// 1) O(n^2)
// 2) O(n^2)
// 3) O(n)
// 4) O(n)


// Be sure to push your code to Github for this assignment!

console.table(arrayOfResults)
