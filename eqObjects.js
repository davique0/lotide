const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

};

const ab = {
  a: "1",
  b: "2"
};

const ba = {
  b: '2',
  a: '1'
};

eqObjects(ab, ba); 