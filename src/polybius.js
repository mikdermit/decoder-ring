// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // encode key
  const encodeKey = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55"
  };
  // decode key
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z"
  };

  function polybius(input, encode = true) {
    // convert input to lower case
    input = input.toLowerCase();
    // empty string for result
    let result = "";
    // decoding
    if (!encode) {
      // loop through numbers
      for (i = 0; i < input.length; i += 2) {
        // make sure length of numbers isn't odd
        if (input.split(" ").join("").length % 2 === 1) {
          return false;
        } // check if input is a space
        else if (input[i] === " ") {
          // add space to result
          result += input[i];
          // reduce i
          i -= 1;
        } else {
          // get number pair
          const num = `${input[i]}${input[i + 1]}`;
          // find letter matching number and add to result
          result += decodeKey[num];
        }
      }
    } 
    //encoding 
    else {
      // loop through letters
      for (i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          // add space to result
          result += input[i];
        } else {
          // find number matching letter and add to result
          result += encodeKey[input[i]];
        }
      }
    }
    return result;
  }
  return {
    polybius
  };
})();

module.exports = { polybius: polybiusModule.polybius };
