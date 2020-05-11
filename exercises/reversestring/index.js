// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// ----------- PERSONAL WORK ----------- //

// initial attempt:
function reverse(str) {
  let newString = ''; // NOTE: give it a better name like "reversedString"
  for(i = 0; i < str.length; i++) { 
    newString = str.charAt(i).concat(newString); // NOTE: it's easiest to simply list the added character at the beginning rather than attempting reversed functionality
  }
  // NOTE: replace with for (let character of str) {}
  return newString; 
}

module.exports = reverse;

// ************* VERDICT *************** //
// * Memorize them fundamentals, I've gotten copy dependent!
// * "for _ of _"  >  "for loop". The syntax is harder to mess up and the code is easier to read