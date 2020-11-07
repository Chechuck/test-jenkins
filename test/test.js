const assert = require('assert');
const add = require('../core/add');

describe('Add', function () {
  it('Should return 2', function () {
    const result = add(1, 1);
    assert.equal(result, 2);
  });

  it('Should return 3', function () {
    const result = add(1, 2);
    assert.equal(result, 3);
  });

  it('Should return 4', function () {
    const result = add(2, 2);
    assert.notEqual(result, 2);
  });
});
