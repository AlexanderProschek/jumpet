# Jumpet
An example package to test npm, Mocha and Chai

Written by Alexander Proschek

## Installation and usage for NodeJS
Run `npm install --save jumpet`

To use any of Jumpet's methods
```
const jumpet = require('jumpet');

let result = jumpet.exp(2,3);

console.log(result); // Will output 8
```

Or use ES6 syntax to unpack a specific method
```
const { reverse } = require('jumpet');

let array = [1,2,3];

reverse(array);

console.log(array); /// Will output [3,2,1]
```