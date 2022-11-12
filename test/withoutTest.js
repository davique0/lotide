const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual')

const testArr = [1, 'hello', 3, 'hi', 5, 6];
const removeArr = ['hi'];

console.log(without(testArr, removeArr));
console.log(without(['1', '2', '3'], [1, 2, '3']));
assertArraysEqual(testArr, [1, 'hello', 3, 'hi', 5, 6]);
