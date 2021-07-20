const { expect } = require('chai');
const fizzBuzz = require('../src/fizzBuzz');

describe("FizzBuzz", () => {
    it("FizzBuzz returns 1", () => {
        expect(fizzBuzz.fizzBuzz(1)).to.equal(1);
    });

    it("FizzBuzz returns 2", () => {
        expect(fizzBuzz.fizzBuzz(2)).to.equal(2);
    });

    it("FizzBuzz returns Fizz to number 3", () => {
        expect(fizzBuzz.fizzBuzz(3)).to.equal("Fizz");
    });

    it("FizzBuzz returns Fizz to number 6", () => {
        expect(fizzBuzz.fizzBuzz(6)).to.equal("Fizz");
    });

    it("FizzBuzz returns Fizz to number 9", () => {
        expect(fizzBuzz.fizzBuzz(6)).to.equal("Fizz");
    });

    it("FizzBuzz returns Buzz to number 5", () => {
        expect(fizzBuzz.fizzBuzz(5)).to.equal("Buzz");
    });
});