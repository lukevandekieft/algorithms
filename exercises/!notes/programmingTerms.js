// RECURSION ******************************
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
// NOTE: the key here is that all the return statements are actually being added! That final "return 1", every instance of "return [calculate]", these are ALL being taken and added at the end. So this can be used additively or multiplicatively but either way we're adding up all the results (which is basically multiplication anyhow) 
// NOTE: Make sure to RETURN every function if you need a final return value! Simply tacking a return on the end doesn't work: note how in the first example we RETURN factorial rather than simply calling it. THIS is what makes "return 1" actually come through.

// WHILE ***********************************
// this is like a ForLoop but has a bit more flexibility: it COULD run forever if needed, it could run never, it could stop at an overflow value (such as below where overflow doesn't matter for slicing an array)
const chunked = [];
let index = 0;
while (index < array.length) {
  chunked.push(array.slice(index, index + size));
  index += size;
}
// While functions do NOT end mid-action. The entire thing will run before checking again. If you need to stop midway through (e.g. stop halfway through a test suite) you need to create individual checks WITHIN the while loop.


// MEMOIZATION *******************************
// a function that wraps around a function to create a cache.
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    //apply runs the function in question with THIS, the 'this' value we're passing in, and ARGS, our variables passed as an array. Here we're simply passing 'this' down in scope like fat arrow and then passing our variables.
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
  // it's important that this function is named our exported function (fib) so that it gets called by memoize, not our slower function
}

const fib = memoize(slowFib);
module.exports = fib;


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

// NESTED BOOLEANS
while (Object.main && Object.main.secondary) {
}
// I often find myself nesting booleans since you can't check a value of null. The above syntax allows this to work altogether since the 2nd value won't get evaluated unless the 1st one is true.

// SPREAD OPERATOR
array.push(...otherArray.children)
// This can be used not only for pushing unknown blocks of info but also for replacing a for loop. In the above example I'm pushing every child individually rather than pushing an array of children; I normally would have approached this with a for loop 

// ********** RUNTIME COMPLEXITY *****************
// "What is the runtime complexity of your solution?"    <-- "How much more processing power/time would running your function take if we doubled the inputs?"
// aka BIG O
// Linear / n / O(n):  
// Quadratic / n^2 / O(n^2)
// Constant / 1 / O(1)


// SEE RUNTIMES IMAGE

// *************** SPACE COMPLEXITY *********************
// How much space / memory / RAM does a program take?
// Study runtime first: this is less common and once you understand runtime this should be pretty intuitive

// This is often similar but not always: for the pyramid step problem I created a linear runtime (2 creates per line) but a potentially quadratic space complexity (increasing from 1 to 2 to 3 to 4 means my saved characters go from 1 to 6 to 15 to 28)


// *************** TREE TRAVERSAL *********************
// likely going to need to create your own tree