// Write your code below this line
const shiftString = (str) => {
let arrayOfCharcodes = []
let stringFromCharcodes = ''

const array = str.split('')
for (let index = 1; index < array.length; index++) {
    const shiftBy = parseInt(str[0]) // convert first element to a number, otherwise '102' + 1 = '1021' instead of '103'
    const element = array[index];
    const charCode = String((element).charCodeAt()) // convert element to string representing a charcode
    const intFromCharCode = Number(charCode) // convert string represenenting charcode to a number
    arrayOfCharcodes.push(intFromCharCode + shiftBy) // add the number of chars to shift to the number and push it to the array
}
// parse array of numbers converting each element to a char, and appending each char to a string
arrayOfCharcodes.forEach(element => {
    stringFromCharcodes += String.fromCharCode(element)
});
console.log(`string from charcodes: ${stringFromCharcodes}`)
return stringFromCharcodes
}
shiftString("1a") // "b"
shiftString("3ce") // "fh"
shiftString("2fcjjm") // "hello"
