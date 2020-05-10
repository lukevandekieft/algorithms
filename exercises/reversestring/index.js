// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newString = "peanut";
  for(i = 0; i <= str.length; i++) {
    newString.concat(str.charAt(i));
  }
  return newString; 
}

module.exports = reverse;