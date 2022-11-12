//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const  testArr = [1, 2, 3, 4, 5, 6, 7, 8];
assertArraysEqual(middle(testArr), [4, 5]);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);