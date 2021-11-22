const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;
// Write your tests here!

describe("substitution", () => {
  it("should return false if given no alphabet", () => {
    const actual = substitution("hello");
    expect(actual).to.be.false;
  });
  it("should return false if alphabet isn't 26 characters", () => {
    const actual = substitution("hello", "abcdefghijklmnopqrstuvwxyza");
    expect(actual).to.be.false;
  });
  it("should return false if alphabet has repeating characters", () => {
    const actual = substitution("hello", "aaaaaabbbbbbccccccddddeeee");
    expect(actual).to.be.false;
  });
  it("should encode with special characters", () => {
    const actual = substitution("hello", "zxcvbnm#sdfghjklqwertyui;a");
    const expected = "#bggk";
    expect(actual).to.equal(expected);
  });
  it("should decode with special characters", () => {
    const actual = substitution(
      "#bggk",
      "zxcvbnm#sdfghjklqwertyui;a",
      (encode = false)
    );
    const expected = "hello";
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const actual = substitution("hello there", "zxcvbnm#sdfghjklqwertyui;a");
    const expected = "#bggk r#bwb";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = substitution("HELLO THERE", "zxcvBnm#sdfGhjklqwertyui;a");
    const expected = "#bggk r#bwb";
    expect(actual).to.equal(expected);
  });
});
