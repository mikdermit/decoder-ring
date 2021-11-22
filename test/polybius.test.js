const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;
// Write your tests here!

describe("polybius", () => {
  it("should ignore capital letters", () => {
    const actual = polybius("heLLo");
    const expected = `3251131343`
    expect(actual).to.equal(expected);
  });
  it("should ignore spaces", () => {
    const actual = polybius("hel lo");
    const expected = `325113 1343`
    expect(actual).to.equal(expected);
  });
  it("should show both i and j when decoding 42", () => {
    const actual = polybius("42", encode = false);
    const expected = `(i/j)`
    expect(actual).to.equal(expected);
  });
  it("should show 42 for both i and j", () => {
    const actual = polybius("ij");
    const expected = `4242`
    expect(actual).to.equal(expected);
  });
  it("should return false if odd amount of numbers when decoding", () => {
    const actual = polybius("123", encode = false);
    expect(actual).to.be.false;
  });
  it("should encode a message", () => {
    const actual = polybius("my name");
    const expected = `2345 33112351`
    expect(actual).to.equal(expected);
  });
  it("should decode a message", () => {
    const actual = polybius("2345 33112351", encode = false);
    const expected = `my name`
    expect(actual).to.equal(expected);
  });
})
