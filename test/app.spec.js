var chai = require('chai');
var bubbleSort = require('../app.js');

describe('Bubble Sort', () => {

  it('should sort an array', () => {
    expect(bubbleSort([4, 3, 2, 1])).to.be.equal([1, 2, 3, 4]);
    expect(bubbleSort([8, 21, 2, 4, 7, 3])).to.be.equal([2, 3, 4, 7, 8, 21]);
  });

});