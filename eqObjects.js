const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  let objOneKeyArr = Object.keys(object1);
  let objTwoKeyArr = Object.keys(object2);
  if (objOneKeyArr.length !== objTwoKeyArr.length) {
    return false;
  } else {
    for (const key of objOneKeyArr) {
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

