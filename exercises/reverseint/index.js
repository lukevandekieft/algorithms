// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  // test note: shared logic for converting numbers
  const reversePositiveNumber = (positiveNumber) => {
    return parseInt(positiveNumber.toString().split('').reverse().join(''), 10)
  } 

  // test note: if we need to check input type, do so here. Return error message upon non-number entry and consider parse-int as input cleanup
  if (n < 0) {
    return -reversePositiveNumber(n);
  } else {
  return reversePositiveNumber(n);
  }
  // NOTE: to get around boolean we could multiply reversePositiveNumber by Math.sign(n) (since it'll either be 0, 1, or -1 it won't impact the value)
}

module.exports = reverseInt;

// ************** RESULTS *********************
// overall feels pretty good. Cleaning up the boolean return with Math.sign(n) would make it cleaner
