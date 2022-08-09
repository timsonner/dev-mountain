// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const isStringBalanced = (string) => {
    const array = string.split('')
    let leftParens = 0
    let rightParens = 0
    array.forEach(element => {
        if (element === '(') {
            leftParens++
        } else if (element === ')') {
            rightParens++
        }
    });
    if (leftParens === rightParens) {
        console.log(`String is balanced`)
        return true
    } else {
        console.log(`String is unbalanced`)
return false
    }
}
isStringBalanced(sample1)
isStringBalanced(sample2)
isStringBalanced(sample3)
isStringBalanced(sample4)