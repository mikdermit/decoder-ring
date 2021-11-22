// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (() => {
  function caesar(input, shift, encode = true) {
    // check shift value
    if (!shift || shift > 25 || shift < -25) {
      return false;
    }
    // reverse shift if decoding
    if (!encode) {
      shift *= -1;
    }
    // convert to lower case
    input = input.toLowerCase();
    // empty string for encoded messsage
    let result = "";
    // loop through each letter
    for (i = 0; i < input.length; i++) {
      // check if input is a letter
      if (input[i].match(/[a-z]/)) {
        // get character code of index and change according to shift
        let code = input.charCodeAt(i) + shift;
        // check if code is outside given alphabet
        if (code < 97) {
          // adjust to loop
          code += 26;
        }
        if (code > 122) {
          code -= 26;
        }
        // get letter from char code and add to result
        result += String.fromCharCode(code);
      } 
      // if not a letter, add to result
      else {
        result += input[i];
      }
    }
    return result;
  }
  return {
    caesar
  };
})();

module.exports = { caesar: caesarModule.caesar };
