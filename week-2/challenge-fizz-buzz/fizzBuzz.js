// Write your solution below this line:

for (let index = 1; index < 51; index++) {
    if (index % 3 === 0) {
        console.log(`fizz`)
    } else if (index % 5 === 0) {
        console.log(`buzz`)
    } else {
        console.log(index)
    }
}