//Compare 2 arrays, True if they are equal, False if they are not

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

//Prints passed if 2 arrays are equal and fail if the 2 arrays are different

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

const middle = function(arr) {
  let middleArr = [];
  const lengthArr = arr.length;
  const middleNum = Math.ceil(arr.length / 2);
  if (lengthArr <= 2) {
    return middleArr;
  } else {
    if (lengthArr % 2 === 0) {
      middleArr.push(arr[middleNum - 1]);
      middleArr.push(arr[middleNum]);
    } else {
      middleArr.push(arr[middleNum - 1]);
    }
  }
  return middleArr;
};

const  testArr = [1, 2, 3, 4, 5, 6, 7, 8];
assertArrayEqual(middle(testArr), [4, 5]);

console.log(middle([]));