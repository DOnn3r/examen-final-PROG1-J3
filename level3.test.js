import { describe } from "mocha";
import { it } from "mocha";
import { assert } from "chai";
import { getMaxVenue } from "./level3.js";

describe("Test with valid input", () => {
    describe("Test if there are people present at the same time", () => {
        it("Must return the number of people present at the same time", () =>
            assert.strictEqual(getMaxVenue(3, ["0 3600000", "1800000 7200000", "4800000 6000000"]), 2)
        );
    });

    describe("Test if there are not people present at the same time", () => {
        it("Must return 0", () =>
            assert.strictEqual(getMaxVenue(3, ["0 1000000", "1100000 2000000", "2100000 3000000"]), 0)
        );
    });
})

describe("Test with invalid input", () => {
    describe("Test if there are the same interval", () => {
        it("Should return a message error", () =>
            assert.strictEqual(getMaxVenue(3, ["0 3600000", "0 3600000", "4800000 6000000"]), "Interval must be different")
        );
    });

    describe("Test if there are empty interval", () => {
        it("Should return a message error", () =>
            assert.strictEqual(getMaxVenue(3, ["0 1000000", "", "2100000 3000000"]), "There are an empty interval")
        );
    });
})

