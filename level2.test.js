import { describe } from "mocha";
import { it } from "mocha";
import { assert } from "chai";
import { reorganize } from "./level2.js";

describe("Test with valid input", () => {
    describe("Test with combined upper and lower case letters", () => {
        it("Must group all occurrences of each letter, case insensitive", () =>
            assert.strictEqual(reorganize("abdAbBce", "aAbbBdce"))
        );
    });

    describe("Test with all lowercase letters", () => {
        it("Must group all occurrences of each letter", () =>
            assert.strictEqual(reorganize("aghigttepcpp", "agghittepppc"))
        );
    });
    
    describe("Test with all uppercase letters", () => {
        it("Must group all occurrences of each letter", () =>
            assert.strictEqual(reorganize("SEDERARAKOTO", "SEEDRRAAKOOT"))
        );
    });
})

describe("Test with invalid input", () => {
    describe("Test with an empty string", () => {
        it("Must return qn empty string", () =>
            assert.strictEqual(reorganize("", ""))
        );
    });

    describe("Test containing numbers or other special characters", () => {
        it("Should return a message error", () =>
            assert.strictEqual(reorganize("mj23!$", "There are invalid string"))
        );
    });
})