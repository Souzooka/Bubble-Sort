var chai = require('chai');
var expect = chai.expect;
var bubbleSort = require('../app.js');

describe('Bubble Sort', () => {

  it('should sort an array', () => {
    expect(bubbleSort([3, 4, 2, 1])).to.be.deep.equal([1, 2, 3, 4]);
    expect(bubbleSort([8, 21, 2, 4, 7, 3])).to.be.deep.equal([2, 3, 4, 7, 8, 21]);

    let longArr = [];

    for (let i = 100; i >= 0; i--) {
      longArr.push(i);
    }

    let longArrSorted = [];

    for (let i = 0; i <= 100; i++) {
      longArrSorted.push(i);
    }

    expect(bubbleSort(longArr)).to.be.deep.equal(longArrSorted);
  });

});