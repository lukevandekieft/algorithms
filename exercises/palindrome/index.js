// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  reversedString = str.split('').reverse().join('');
  // try note: I could opt to just compare a string to itself using locations but I think this is the easiest to read and most error-proof option
  for(let i = 0; i < str.length / 2; i++) {
    // try note: I COULD reverse a string fully and compare but I want to cut the work in half - if it's a palindrome that'll be true no matter what. In the real world I'd verify this is true.
    // NOTE: a better solution is to cut string and reverseString in half... solves the problem of restricting characters or dealing with odd number hangover!
    if (str.charAt(i) !== reversedString.charAt(i)) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;

// **************** RESULTS ******************** //
// I over-complicated it, simply see if the two strings are equal
