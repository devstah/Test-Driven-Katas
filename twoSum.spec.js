const { expect } = require('chai');
const twoSum = require('./twoSum');


describe('twoSum', () => {
    const arr = [1,2,3]
    const sum = 4
  it('Takes an array', () => { //spec 1
    expect(twoSum(5,5)).to.equal('must be an array');
  });
  it('Can not use the same index twice', () => { //spec 1
    expect(twoSum(arr,sum)).to.not.equal([1,1]);
  });
  
});