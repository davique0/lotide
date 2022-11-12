const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result1 = countLetters("lighthouse in the house");
assertEqual(result1['h'], 4);
assertEqual(result1['l'], 1);
assertEqual(result1['u'], 2);
assertEqual(result1[' '], undefined);