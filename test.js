const assert = require("assert");
const getPalettes = require("./dist/index.js");

describe("generator", () => {
    it("should not work when the amount is not a number", () => {
        const palettes = getPalettes("asfa");
        assert.equal(palettes, "Please provide valid amount");
    })
    
    it("should return a array of palettes when the amount is number", () => {
        const palettes = getPalettes(2);
        assert(Array.isArray(palettes), "It should be an array");
    })
})