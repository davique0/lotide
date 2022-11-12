const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const arrTestNums = [23, 09, 98, 87, 4, 8, 89, 34, 78, 39, 6, 9 ]

const evenOrOdd = map(arrTestNums, num => num % 2 === 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`));