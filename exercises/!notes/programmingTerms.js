// RECURSION
// Function that calls itself with manipulated input(s) until a certain condition is met.
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}