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

//Removes unwanted items from a given array

const without = function(fullArr, unwantedItem) {
  let cleanArr = [];
  for (const item of fullArr) {
    if (!unwantedItem.includes(item)) {
      cleanArr.push(item);
    }
  }
  return cleanArr;
};

const testArr = [1, 'hello', 3, 'hi', 5, 6];
const removeArr = ['hi'];

console.log(without(testArr, removeArr));
console.log(without(['1', '2', '3'], [1, 2, '3']));
assertArrayEqual(testArr, [1, 'hello', 3, 'hi', 5, 6]);

