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
  if(objOneKeyArr.length === objTwoKeyArr.length) {
    for (let i = 0; i < objOneKeyArr.length; i++) {
      if (!objOneKeyArr.includes(objTwoKeyArr[i])) {
        return false;
      } else {
          for (const key in object1) {
            if (object1[key] !== object2[key]) {
              return false;
            }
        }
      }
    }
  }
  return true;
};

const ab = {
  a: "1",
  b: "2"
};

const ba = {
  b: '2',
  a: '3'
};

console.log(eqObjects(ab, ba)); 


