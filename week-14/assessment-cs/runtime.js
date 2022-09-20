const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/**
 * A way to display an object with all it's properties to the console
 */
// const util = require('util')
// console.log(util.inspect(fooObject, {showHidden: false, depth: null, colors: true}))
// // alternative syntax
// console.log(util.inspect(fooObject, false, null, true))

/**
 * A function to perform runtime analysis on a given function.
 * Results are aggregated into an array (arrayOfResults).
 * I like the verbose output of perf, the examples above only exposed the 'preciseWords' property and I find the values of the 'time' 
 * property very valuable for comparison.
 */

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

performAnalysis(doublerAppend, tinyArray, "tinyArray")
performAnalysis(doublerInsert, tinyArray, "tinyArray")
performAnalysis(doublerAppend, smallArray, "smallArray")
performAnalysis(doublerInsert, smallArray, "smallArray")
performAnalysis(doublerAppend, largeArray, "largeArray")
performAnalysis(doublerInsert, largeArray, "largeArray")
performAnalysis(doublerAppend, extraLargeArray, "extraLargeArray")
performAnalysis(doublerInsert, extraLargeArray, "extraLargeArray")

console.table(arrayOfResults)

/**
 * A function to convert an array of objects to CSV format
 */
function convertToCSV(arrayOfObjects) {
    const contentsOfCSV = [Object.keys(arrayOfObjects[0])].concat(arrayOfObjects)
  
    return contentsOfCSV.map(item => {
      return Object.values(item).toString()
    }).join('\n')
}
// console.log(convertToCSV(arrayOfResults))

/**
 * A function to write files to disk
 * Flags:
 * r+ read/write
 * w+ read/write, start at the beginning of the file. File is created if it does't exist
 * a write, start at the end of the file. File is created if it doesn't exist. 
 * a+ read/write, start at the end of the file. File is created if it doesn't exist
 */

const fs = require('fs/promises');

async function writeFileToDisk(fileName, content) {
        try {
            fs.writeFile(fileName, content, { flag: 'a+' }, err => {
                console.log(`Error writing file ${err}`) // the a+ flag is one of many options
            });
            console.log(`Success!`)
        } catch (err) {
            console.log(err);
          }
}

/**
 * A function to get user input from the console
 */
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
})

/**
 * This question gives the user an opportunity to export as CSV or exit
 */
const firstQuestion = () => {
    rl.question(`Would you like to export these results as a CSV file? (y/n) `, (answer) => {
        if (answer == 'y') {
            secondQuestion()
        } else if (answer == 'n'){
            console.log('exiting...')
            rl.close()
        } else {
            console.log(`${answer} is gibberish, mate. exiting...`)
            rl.close()
        }
    })
}

/**
 * This question enables the user to provide a filename for export and calls a function to convert an array of objects to CSV, then calls
 * another function to write that CSV to disk. 
 * User is also given the opportunity to exit.
 */
const secondQuestion = () => {
    rl.question("Give a name and path for the file. example: ./foo.csv or /dev/nul/foo.csv ", (fileName) => {
        rl.question(`You entered ${fileName} is this correct? (y/n) `, answer => {
            if (answer == 'y') {
                console.log(`Attempting to write ${fileName} to disk...`)
                const fileContents = convertToCSV(arrayOfResults) // call function to convert the array of objects to CSV format
                writeFileToDisk(fileName, fileContents) // call function to write the CSV file to disk
                rl.close()
            } else if (answer == 'n'){
                console.log('exiting...')
                rl.close()
            } else {
                console.log(`${answer} is gibberish, mate. exiting...`)
                rl.close()
            }
        })
    })
}
        
firstQuestion()

