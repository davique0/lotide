const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

module.exports = assertArraysEqual;

