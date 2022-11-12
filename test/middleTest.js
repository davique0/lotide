// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});


// const  testArr = [1, 2, 3, 4, 5, 6, 7, 8];
// assertArraysEqual(middle(testArr), [4, 5]);

// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);