const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  let strNoSpace = str.split(" ").join("");
  console.log(strNoSpace);
  for (let item of strNoSpace) {
    // console.log(item)
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));