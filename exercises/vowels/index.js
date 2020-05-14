// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str.replace(/[^aeiouAEIOU]/g , '').length;
  // NOTE: /[^aeiou]/gi was the case ignorer I was thinking of, saving those sweet sweet 4 characters
}

module.exports = vowels;
// **************** RESULTS *****************
// First slam dunk! See note above for regex help
// The provided solution uses match() rather than replace() but I actually like my solution better, it removes the need to evaluate for falsy/truthy before checking length