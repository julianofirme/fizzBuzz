const { expect } = require('chai');
const fizzBuzz = require('../src/fizzBuzz');

describe("FizzBuzz", () => {
    it("FizzBuzz returns 1", () => {
        expect(fizzBuzz.fizzBuzz(1)).to.equal(1);
    });

    it("FizzBuzz returns 2", () => {
        expect(fizzBuzz.fizzBuzz(2)).to.equal(2);
    });
});