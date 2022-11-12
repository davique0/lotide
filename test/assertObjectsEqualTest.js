const assertObjectsEqual = require('../assertObjectsEqual');

let objTest = {a: 1, b: 2};
let objTest2 = {a: 1, b: 2};

assertObjectsEqual(objTest, objTest2);