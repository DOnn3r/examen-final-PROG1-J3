import { describe } from "mocha";
import { it } from "mocha";
import { assert } from "chai";
import { getMaxVenue } from "./level3.js";

describe("Test with invalid input", () => {
    it("Should return a message error if input is invalid", () =>
        assert.strictEqual(getMaxVenue())
    );
});
