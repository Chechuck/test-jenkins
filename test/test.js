const assert = require('assert');
const add = require('../core/add');

describe('Add', function () {
  it('Should return 2', function () {
    const result = add(1, 1);
    assert.equal(result, 2);
  });
});
