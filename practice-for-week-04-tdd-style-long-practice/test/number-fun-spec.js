const chai = require("chai");
const expect = chai.expect;
const { returnsThree } = require('../problems/number-fun')
const { reciprocal } = require('../problems/number-fun')

describe('returnsThree()', () => {
    it('should return 3', () => {
        const actual1 = returnsThree();
        const expected1 = 3;
        expect(actual1).to.eql(expected1)
    })
})
describe('reciprocal(n)', () => {
    context("if n is between 1 and 1000000", () => {
        it('should return the reciprocal', () => {
            const actual2 = reciprocal(3);
            const actual4 = reciprocal(100003);
            const expected2 = (1 / 3);
            const expected4 = (1 / 100003);
            expect(actual2).to.eql(expected2)
            expect(actual4).to.eql(expected4)
        })
        it('should work with multiple inputs', () => {
            expect(reciprocal(3, 5, 7)).to.eql(1 / 3);
        })
    })
    context("if n is not between 1 and 1000000", () => {
        it('should return a TypeError with a descriptive string message', () => {
            expect(() => reciprocal(-5)).to.throw(TypeError)
            expect(() => reciprocal(1000001)).to.throw(TypeError)
        });
    })
})
