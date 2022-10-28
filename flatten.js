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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

const flatten = function(nestedArr) {
  let flattenedArr = [];
  for(let i = 0; i < nestedArr.length; i++) {
   if (Array.isArray(nestedArr[i]) !== true) {
    flattenedArr.push(nestedArr[i]);
   } else {
    for (let j = 0; j < nestedArr[i].length; j++) {
      flattenedArr.push(nestedArr[i][j]);
    }
   }
  }
  return flattenedArr;
}

flatten([1, 2, 3, [4, 5], 6]);
