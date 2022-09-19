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

console.log(resultsInsert)


// const util = require('util')
// console.log(util.inspect(foo, {showHidden: false, depth: null, colors: true}))

// // alternative shortcut
// console.log(util.inspect(output, false, null, true /* enable colors */))

let arrayOfResults = []

const performAnalysis = (functionToTest, parameters, parameterName) => {
    console.log()
    perf.start()
    functionToTest(parameters)
    let output = perf.stop() // output becomes an object
    output.name = `${functionToTest.name}(${parameterName})`
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

function convertToCSV(arrayOfObjects) {
    const contentsOfCSV = [Object.keys(arrayOfObjects[0])].concat(arrayOfObjects)
  
    return contentsOfCSV.map(item => {
      return Object.values(item).toString()
    }).join('\n')
}
  
// console.log(convertToCSV(arrayOfResults))

const fs = require('fs/promises');

async function writeFileToDisk(fileName, content) {
        try {
            fs.writeFile(fileName, content, { flag: 'a+' }, err => {
                console.log(`error writing file ${err}`)
            });
            console.log(`Success!`)
        } catch (err) {
            console.log(err);
          }
}


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
  output: process.stdout
})

let exit = false 

const firstQuestion = () => {
    rl.question(`would you like to export these results as a CSV file? (y/n) `, (answer) => {
        if (answer == 'y') {
            secondQuestion()
        } else if (answer == 'n'){
            console.log('exiting...')
            rl.close()
        } else {
            console.log(`${answer} is giberish, mate. exiting...`)
            rl.close()
        }
    })
}


const secondQuestion = () => {
    rl.question("Give a name and path for the file. example: ./foo.csv or /dev/nul/foo.csv ", (fileName) => {
        rl.question(`You entered ${fileName} is this correct? (y/n) `, answer => {
            if (answer == 'y') {
                console.log(`Attempting to write ${fileName} to disk...`)
                const fileContents = convertToCSV(arrayOfResults)
                writeFileToDisk(fileName, fileContents)
                rl.close()
            } else if (answer == 'n'){
                console.log('exiting...')
                rl.close()
            } else {
                console.log(`${answer} is giberish, mate. exiting...`)
                rl.close()
            }
        })
    })
}
        
firstQuestion()

