const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let objOneKeyArr = Object.keys(object1);
  let objTwoKeyArr = Object.keys(object2);
  if (objOneKeyArr.length !== objTwoKeyArr.length) {
    return false;
  } else {
    for (const key of objOneKeyArr) {
          if (object1[key] !== object2[key]) {
      return false;
      }
    }
  }
  return true;
};

const ab = {
  a: "a",
  b: "2"
};

const ba = {
  b: 'a',
  a: '2'
};

console.log(eqObjects(ab, ba));

