//Assert Equal to compare values
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Assert equal for array
const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is equal to [${arr2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${arr1}] is different than [${arr2}]`);
  }
};


const letterPositions = function(sentence) {
let result = {};
let strNoSpace = sentence.split(" ").join("");

for (let item of strNoSpace) {
  result[item] = [];
  // result[item].push(sentence.indexOf(item))
}




for (i = 0; i < sentence.length; i++) {
  for (let item in result) {
    //console.log(result[item])
    if (item === sentence[i] && sentence[i] !== " ") {
      result[item].push(i);
    } 
  }
}


// for (let item in result) {
  
// }
// for (let i = 0; i < sentNoSpace.length; i++) {
//   sentIndex = sentNoSpace[i]
//   if (result[sentLetter]) {
//     // console.log(sentLetter)
//     result[sentLetter].push(i);
//   } else {
//     console.log(sentLetter)
//     result[sentLetter] = [i];
//   }
// }
return result;
};

console.log(letterPositions("lighthouse in the house"));