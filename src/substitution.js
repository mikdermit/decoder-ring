// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // check input type and alphabet
    if (typeof input != "string" || !alphabet || alphabet.length != 26) {
      return false;
    }
    // check if any repeating characters in alphabet
    for (i = 0; i < alphabet.length; i++) {
      for (j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    // convert to lower case
    input = input.toLowerCase();
    // empty string for encoded messsage
    let result = "";
    // reference alphabet
    let alph = "abcdefghijklmnopqrstuvwxyz";
    // make reference alphabet an array
    const realAlph = alph.split("");
    // make input alphabet an array
    const substitution = alphabet.toLowerCase().split("");
    // loop through letters
    for (i = 0; i < input.length; i++) {
      // check if space
      if (input[i] === " ") {
        // add to result
        result += input[i];
      } 
      // decoding
      else if (!encode) {
        // find index of letter in real alphabet
        const index = substitution.indexOf(
          substitution.find(letter => letter === input[i])
        );
        // add correct letter from alphabet
        result += realAlph[index];
      } 
      // encoding.
      else {
        // find index of letter in given alphabet
        const index = realAlph.indexOf(
          realAlph.find(letter => letter === input[i])
        );
        // add correct letter from given alphabet
        result += substitution[index];
      }
    }
    return result;
  }

  return {
    substitution
  };
})();

module.exports = { substitution: substitutionModule.substitution };
