// By definition, a callback is a function that you pass into another function as an argument for executing later.

const saySomething = a => b => a + b
let sayHello = saySomething(`Hello, `)
let sayHelloToZaphod = sayHello(`Zaphod`)
console.log(sayHelloToZaphod)

const output = x => console.log(`output: ${x}`)
const func = (input, callback) => callback(input)
func(`Raaargh! I'm the input!`, output) 

const innerFuncA = () => `I'm an inner function!`
const innerFuncB = () => `I'm another inner function`
const outerFunction = callback => console.log(callback())

outerFunction(innerFuncA)
outerFunction(innerFuncB)