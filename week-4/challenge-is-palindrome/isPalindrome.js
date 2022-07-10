/**
 * Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
 */
// Write your code below
function isPalindrome(string) {
    let reversedString = string.split(``).reverse().join(``)
    if (string === reversedString) {
        console.log(`'${string}' is a palindrome. ${string} === ${reversedString}`)
        return false
    } else {
        console.log(`'${string}' isn't a palindrome. ${string} !== ${reversedString}`)
return false
    }
}
isPalindrome(`Noon`)
isPalindrome(`noon`)