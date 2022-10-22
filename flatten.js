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

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};

const flatten = function(nestedArr) {
  //console.log(nestedArr);
  //checking every element of the array and find if there is an array nested
  for(let i = 0; i < nestedArr.length; i++) {
    const num = nestedArr[i];
    if (Array.isArray(num) === true) {
      // console.log(item);
      //once we find the nested array take the items out of that array
    }
  }
}

flatten([1, 2, 3, [4, 5], 6]);
