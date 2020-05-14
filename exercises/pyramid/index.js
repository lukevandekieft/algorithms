// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // n = positive int, otherwise error handling needs to be built

  // length = n*2 - 1
  let printString = " ".repeat(n - 1) + "#" + " ".repeat(n - 1);
  console.log(printString);

  for (let i = 1; i < n; i++) {
    printString = printString.slice(1, n-1) + "###" + printString.slice(n, 2*n - 2)
    console.log(printString);
  }
}

module.exports = pyramid;
