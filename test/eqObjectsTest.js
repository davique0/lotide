const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const ab = {
  a: "a",
  b: "2"
};

const ba = {
  b: '2',
  a: 'a'
};

console.log(eqObjects(ab, ba));

const cd = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true); // => false
