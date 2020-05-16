// RECURSION
// Function that calls itself with manipulated input(s) until a certain condition is met.
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
// TIP: to default a value for recursion:
function createTable(column, row = 0) {
  row++;
  if (row < column) {
    createTable(column, row)
  }
}
// TIP: start with your exit case and build your first function to simply count down/up to the exit. This greatly reduces the chance of getting stuck in a recursion

// WHILE
// this is like a ForLoop but has a bit more flexibility: it COULD run forever if needed, it could run never, it could stop at an overflow value (such as below where overflow doesn't matter for slicing an array)
const chunked = [];
let index = 0;
while (index < array.length) {
  chunked.push(array.slice(index, index + size));
  index += size;
}

// ********** SYNTAX ************

// BRACKETS OR NO?
str.split('').every((value, i) => { return value === str[str.length - i - 1] }) // Brackets are optional when passing fat arrow function, however CHOOSING to include them necessitates a return block. Skill when possible.
str.split('').every((value, i) => value === str[str.length - i - 1])

// LOOPING
for (let char of characters) // Works for strings and arrays
for (let char in characters) // Works for objects

// ITERATIVE ADDING
let number = 0;
number++   ||   number = number + 1  //  <-- "number = number++" does NOT work: use one or the other

// REGEX
// See OneNote: "Web Development --> Other --> Regex"


// ********** RUNTIME COMPLEXITY *****************
// "What is the runtime complexity of your solution?"    <-- "How much more processing power/time would running your function take if we doubled the inputs?"
// aka BIG O
// Linear / n / O(n):  
// Quadratic / n^2 / O(n^2)
// Constant / 1 / O(1)


// SEE RUNTIMES IMAGE

// *************** SPACE COMPLEXITY *********************
// How much space / memory / RAM does a program take?

// This is often similar but not always: for the pyramid step problem I created a linear runtime (2 creates per line) but a potentially quadratic space complexity (increasing from 1 to 2 to 3 to 4 means my saved characters go from 1 to 6 to 15 to 28)