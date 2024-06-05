import { describe } from "mocha";
import { it } from "mocha";
import { assert } from "chai";
import { evaluatePrice } from "./level1.js";

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
});

describe("Test with invalid input", () => {
    it("Should return a message error if input is invalid", () =>
        assert.strictEqual(evaluatePrice([-6, -50, -26]), 'There are invalid input'));
});
