const counterObject = require('./myscript.js')

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require('./myscript.js')
console.log(newCounterObject.getCounter());
counterObject.incrementCounter();
console.log(newCounterObject.getCounter());