const { expect } = require('chai');
const wrap = require('./wrap');


describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => { //spec 1
    expect(wrap("", 10)).to.equal("");
  });
  it('Line must be a string', () => {
    expect (typeof(wrap("", 10))).to.equal("string");
  });
  it('maxLen must be a number', () => {
    expect (typeof(wrap("", 10))).to.equal("string"); //if this is working
    expect (wrap("", 10)).to.not.equal("Pass in a number for your maxLen"); //then we shouldn't get this message
  });
  it("No line is longer than the maxLen", () => {
    const num = 20;
    const lines = wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", num); //function result
    const answer = `Lorem ipsum dolor
    sit eu amet, elit na
    magna sem amet nulla
    vel purus ac ligula.`

    expect(lines).to.equal(answer);

  });
});

