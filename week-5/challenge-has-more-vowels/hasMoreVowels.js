function hasMoreVowels(word){
const vowels = [`a`, `e`, `i`, `o`, `u`, `A`, `E`, `I`, `O`, `U`]
let vowelCount = 0
let hasMoreVowels = false

word.split(``).forEach(element => {
    if (vowels.includes(element)) {
        vowelCount++
    }
});

if (vowelCount > word.length / 2) {
    hasMoreVowels = true
}
console.log(`word: ${word}, word lenth: ${word.length}, vowels: ${vowelCount}, hasMoreVowels: ${hasMoreVowels}`)
return hasMoreVowels
}
hasMoreVowels(`mice`)
hasMoreVowels(`mOOse`)