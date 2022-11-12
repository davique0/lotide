const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Hi', 'Hola,] for ['Hello', 'Hi', 'Hola']", () => {
    assert.deepEqual(tail(['Hello', 'Hi', 'Hola']), ['Hi', 'Hola']);
  });

  it("returns the length of tail being 2 for ['Hello', 'Hi', 'Hola']", () => {
    assert.strictEqual(tail(['Hello', 'Hi', 'Hola']).length, 2);
  });
});