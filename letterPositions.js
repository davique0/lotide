//Assert Equal to compare values
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

//Assert equal for array
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

//Function declaration
const letterPositions = function(sentence) {
  let result = {};
  let strNoSpace = sentence.split(" ").join("");
  //Creation of key for result object
  for (let item of strNoSpace) {
    result[item] = [];
  }
  //adding position of letters in the proper key
  for (let i = 0; i < sentence.length; i++) {
    for (let item in result) {
      if (item === sentence[i] && sentence[i] !== " ") {
        result[item].push(i);
      }
    }
  }
  return result;
};


console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);