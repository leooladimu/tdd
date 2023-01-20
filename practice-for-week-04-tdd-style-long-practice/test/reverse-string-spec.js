const chai = require("chai");
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')

describe('reverseString(str)', () => {
  it('should be of type string', () => {
    const number = 6;
    const object = { i: "am", an: "object" };
    const array = ["i", "am", "an", "array"];
    expect(() => reverseString(number)).to.throw(TypeError);
    expect(() => reverseString(object)).to.throw(TypeError);
    expect(() => reverseString(array)).to.throw(TypeError);
  }) 
  it('should return a string in reverse', () => {
    const str1 = 'fun';
    const actual1 = reverseString(str1);
    const expected1 = 'nuf'
    expect(actual1).to.eql(expected1);
  }) 
  it('should return an empty string if given an empty string') {
    const str2 = '';
    const actual2 = reverseString(str2);
    const expected2 = ''
    expect(actual2).to.eql(expected2);
  }
})
