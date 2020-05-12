// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // init note: test for non-int values beforehand

  for(let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0 ) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }

  // init note: negatives and 0 are interesting considerations
  // if (n >= 0) {
  //   // count up
  // } else {
  //   //count down
  // }
}

module.exports = fizzBuzz;

// ********** RESULTS ************
// my first legit pass! I MAY want to join 3 & 5 to lowest denominator
// Remember for discussion that ternary CAN be used but is generally only advised when it's legible