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
  let lengthArr = arr.length;
  if (lengthArr < 2) {
    return middleArr;
  } else {
    if (lengthArr % 2 === 0) {
      middleArr.push(arr[(lengthArr / 2) - 1]);
      console.log(middleArr);
    }
  }
}

console.log(middle([1, 1, 2, 2, 3, 3]));