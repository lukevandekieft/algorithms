// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // does this work for non-int, negative, and zero values?

  let fibValue;

  let calcFib = (smallerVal = 0, biggerVal = 1, counter = 2) => {
    let newFibValue = smallerVal + biggerVal;
    if (counter === n) {
      fibValue = newFibValue;
    } else {
      calcFib(biggerVal, newFibValue, counter + 1)
    }
  }

  if(n === 1) {
    return 1;
  } else {
    calcFib();
  }

  // solve question: why do I need to use this holder variable? Why does it fail when I simply do return calcFib()?
  return fibValue;
}

module.exports = fib;

// ***************** RESULTS *********************
// My solution is... KINDOF recursive? The big thing is that the calcFib is recursive rather than the whole fib function. below is the actual answer:

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n-1) + fib(n-2)
// }

// The OTHER error I made was not understanding how recursion really works. My failed return was a result of this. Actual recurion would work like this for me:

// if (counter === n) {
//   return newFibValue;
// } else {
//   return calcFib(biggerVal, newFibValue, counter + 1)
// }

// The function will return something every time and add together all the solutions. In this case many of the solutions will just be function calls.