import { describe } from "mocha";
import { it } from "mocha";
import { assert } from "chai";
import { evaluatePrice } from "./level1.js";
import { reorganize } from "./level2.js";

describe("Test with valid input", () => {
    it("Must return the group rate if it's advantageous for them", () =>
        assert.strictEqual(evaluatePrice([6, 50, 26]), 150)
    );
    it("Must return the same price if the group rate is equal to the individual rate", () =>
        assert.strictEqual(evaluatePrice([4, 40, 20]), 80)
    );
    it("Must return individual rate if most suitable for group", () =>
        assert.strictEqual(evaluatePrice([2, 20, 12]), 24)
    );
    it("Must return individual rate if most suitable for group", () =>
        assert.strictEqual(evaluatePrice([2, 20, 11]), 22)
    );
});

describe("Test with invalid input", () => {
    it("Should return a message error if input is invalid", () =>
        assert.strictEqual(evaluatePrice([-6, -50, -26]), 'There are invalid input'));
});


describe("Test with valid input", () => {
    describe("Test with combined upper and lower case letters", () => {
        it("Must group all occurrences of each letter, case insensitive", () =>
            assert.equal(reorganize("abdAbBce"), "aAbbBdce")
        );
    });

    describe("Test with all lowercase letters", () => {
        it("Must group all occurrences of each letter", () =>
            assert.equal(reorganize("aghigttepcpp"), "agghittepppc")
        );
    });
    
    describe("Test with all uppercase letters", () => {
        it("Must group all occurrences of each letter", () =>
            assert.equal(reorganize("SEDERARAKOTO"), "SEEDRRAAKOOT")
        );
    });
})

describe("Test with invalid input", () => {
    describe("Test with an empty string", () => {
        it("Must return qn empty string", () =>
            assert.equal(reorganize(""), "")
        );
    });

    describe("Test containing numbers or other special characters", () => {
        it("Should return a message error", () =>
            assert.equal(reorganize("mj23!$"), "There are invalid string")
        );
    });
})