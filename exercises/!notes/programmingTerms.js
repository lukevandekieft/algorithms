// RECURSION
// Function that calls itself with manipulated input(s) until a certain condition is met.
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

// ********** SYNTAX ************

// BRACKETS OR NO?
str.split('').every((value, i) => { return value === str[str.length - i - 1] }) // Brackets are optional when passing fat arrow function, however CHOOSING to include them necessitates a return block. Skill when possible.
str.split('').every((value, i) => value === str[str.length - i - 1])