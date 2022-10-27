const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objOneKeyArr = Object.keys(object1);
  let objTwoKeyArr = Object.keys(object2);
  if (objOneKeyArr.length !== objTwoKeyArr.length) {
    return false;
  } else {
    for (const key of objOneKeyArr) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} is equal to ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} is different than ${inspect(expected)}`);
  }
  // console.log(`Example label: ${inspect(actual)}`);
}
let objTest = {a: 1, b: 2};
let objTest2 = {a: 1, b: 2};

assertObjectsEqual(objTest, objTest2);