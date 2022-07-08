/**
 * Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
 */
// Write your code below
function hasUniqueChars(string) {
    let array = string.split(``)
    let hasUniqueChars = true
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        console.log(`first: ${first}`)
        for (let j = i + 1; j < array.length; j++) {
          const second = array[j];
          console.log(`second: ${second}`)
          if (first === second) {
            console.log(true);
            hasUniqueChars = false
          } else {
            console.log(false);
          }
        }
      }
      console.log(`hasUniqueChars: ${hasUniqueChars}`)
      return hasUniqueChars
}

hasUniqueChars(`Mmonday`)
hasUniqueChars(`Wednesday`)


function regexHasUniqueChars(string) {
    // split string into an array, sort the array elements alphabetically, join sorted elements back together with no whitespace as a string, match the alphabetically sorted string for duplicate characters next to each other, like 'aa', etc.
    if (string.split(``).sort().join(``).match(/(.)\1+/g)) {
        return false // false if match is found, string chars not unique
    } else {
        return true // true if no matches found
    }
}
console.log(`regexHasUniqueChars: ${regexHasUniqueChars(`Monday`)}`)
console.log(`regexHasUniqueChars: ${regexHasUniqueChars(`Wednesday`)}`)


function regexLongHasUniqueChars(string) {
    console.log(`checking '${string}' for duplicate characters...`)
    let arrayFromString = string.split(``) // create array from string
    console.log(`arrayFromString:`)
    console.table(arrayFromString)
    let sortedArrayFromString = arrayFromString.sort() // sort the array
    console.log(`sortedArrayFromString:`)
    console.table(sortedArrayFromString)
    let stringFromSortedArray = sortedArrayFromString.join(``) // make string from array
    console.log(`stringFromSortedArray: ${stringFromSortedArray}`)
    regexMatch = stringFromSortedArray.match(/(.)\1+/g) // regex to match duplicate characters in string
console.log(`regex match of stringFromSortedArray: ${regexMatch}`)
if (regexMatch === null) {
    return false
} else {
    return true
}
}

regexLongHasUniqueChars(`Monday`)
console.log(regexLongHasUniqueChars(`Wednesday`))