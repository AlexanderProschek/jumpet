'use strict';

let expect = require('chai').expect;
let jumpet = require('../src/index');

describe('Array reverse Copy', () => {
    it('should reverse a copy of the array and leave the original untouched', () => {
        let array = [1,2,3];
        let arrayCopy = jumpet.copyAndReverse(array);

        expect(arrayCopy).to.deep.equal([3,2,1]);
        expect(array).to.deep.equal([1,2,3]);
    });

    it('should return a seperate empty array when an empty array is passed in', () => {
        let emptyArray = [];
        let emptyArrayCopy = jumpet.copyAndReverse(emptyArray);

        expect(emptyArrayCopy).to.deep.equal([]);
        expect(emptyArray).to.deep.equal([]);

        emptyArray.push(1);
        expect(emptyArrayCopy).to.deep.equal([]);
        expect(emptyArray).to.deep.equal([1]);

        emptyArrayCopy.push(2);
        expect(emptyArrayCopy).to.deep.equal([2]);
        expect(emptyArray).to.deep.equal([1]);
    })
});

describe('Array reverse in-place', () => {
    it('should reverse reverse the original array in-place', () => {
        let array = [1,2,3];
        jumpet.reverse(array);

        expect(array).to.deep.equal([3,2,1]);
    });

    it('should keep an empty array the same', () => {
        let array = [];
        jumpet.reverse(array);

        expect(array).to.deep.equal([]);
    })
});

describe('Exponentiation', () => {
    it('should correctly exponentiate two numbers', () => {
    let a = 3;
        let b = 5;

        let result = jumpet.exp(a, b);

        expect(result).to.deep.equal(243);
    });

    it('should correctly exponentiate with a negative exponent', () => {
        let a = 3;
        let b = -3;

        let result = jumpet.exp(a, b);

        expect(result).to.be.closeTo(0.03703703704, 0.00001);
    });

    it('should correctly exponentiate 0^x', () => {
        let result = jumpet.exp(0, 3);

        expect(result).to.be.equal(0);
    })

    it('should correctly exponentiate x^0', () => {
        let result = jumpet.exp(4, 0);

        expect(result).to.be.equal(1);
    })

    it('should correctly exponentiate 0^0', () => {
        let result = jumpet.exp(0, 0);

        expect(result).to.be.equal(1);
    })
})