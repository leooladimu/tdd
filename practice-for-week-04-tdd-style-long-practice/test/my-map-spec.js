const chai = require("chai");
const expect = chai.expect;

describe('myMap()', () => {
    it('should return a new array where the callback has been called upon each element in the original array', () => {
        const cb1 = function (num) {
            return num * 2;
        }
        const actual1 = myMap([1, 2], cb1);
        const expected1 = [2, 4];
        expect(actual1).to.eql(expected1)
    })

    it('should not mutate the original argument array', () => {
        const cb1 = function (num) {
            return num * 2;
        }
        const actual1 = myMap([1, 2], cb1);
        const expected1 = [2, 4];
        expect(actual1).to.eql(expected1)
    })
})