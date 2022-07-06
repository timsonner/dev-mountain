// By definition, a callback is a function that you pass into another function as an argument for executing later.

const say = a => (b) => (c) => a + b + c;
const sayHello = say(`Hello, `);
const sayHelloToZaphod = sayHello(`Zaphod `);
const sayHelloToZaphodBeeblebrox = sayHelloToZaphod(`Beeblebrox.`);
console.log(sayHelloToZaphodBeeblebrox);

const output = (x) => console.log(`output: ${x}`);
const func = (input, callback) => callback(input);
func(`Raaargh! I'm the input!`, output);

const innerFuncA = () => `I'm an inner function!`;
const innerFuncB = () => `I'm another inner function`;
const outerFunction = (callback) => console.log(callback());
outerFunction(innerFuncA);
outerFunction(innerFuncB);

const evaluateNumber = (number, callback) => {
  if (number > 10) {
    callback(true);
  } else {
    callback(false);
  }
};

evaluateNumber(3, (callbackReturn) => {
  if (callbackReturn) {
    console.log(`number is greater than 10`);
} else {
    console.log(`number is less than 10`)
  }
});
