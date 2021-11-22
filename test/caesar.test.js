const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;
// Write your tests here!

describe("caesar", () => {
  it("should return false if the shift amount is 0", () => {
    const actual = caesar("hello", 0);
    expect(actual).to.be.false;
  });
  it("should return false if the statement is greater than 25", () => {
    const actual = caesar("hello", 26);
    expect(actual).to.be.false;
  });
  it("should return false if the statement is less than -25", () => {
    const actual = caesar("hello", -26);
    expect(actual).to.be.false;
  });
  it("should leave special characters and spaces alone", () => {
    const actual = caesar("!@# $%^&*", 5);
    const expected = "!@# $%^&*";
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const actual = caesar("HELLO", 5);
    const expected = "mjqqt";
    expect(actual).to.eql(expected);
  });
  it("should allow a negative shift to the left", () => {
    const actual = caesar("hello", -5);
    const expected = "czggj";
    expect(actual).to.eql(expected);
  });
  it("should correctly handle letters at end of alphabet", () => {
    const actual = caesar("xyz", 5);
    const expected = "cde";
    expect(actual).to.eql(expected);
  });
  it("should correctly encode a message", () => {
    const actual = caesar("hello", 5);
    const expected = "mjqqt";
    expect(actual).to.eql(expected);
  });
  it("should correctly decode a message", () => {
    const actual = caesar("mjqqt", 5, false);
    const expected = "hello";
    expect(actual).to.eql(expected);
  });
});
