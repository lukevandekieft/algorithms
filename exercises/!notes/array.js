array = ["apple", "banana", "corn", "durian"]
mixedArray = ["apple", -85, "corn", 100.234]
value = "meal"

// CHANGE FUNCTIONS
array.reverse() // [ "corn", "banana", "apple" ]
array.concat()
array.reduce((accumulator, currentValue) => accumulator + currentValue, value); // "mealapplebananacorn"; value is optional and is a starting value. With numbers these will actually add
array.slice(1, 4) // ["banana", "corn", "durian"]
array.slice(1, 4000) // ["banana", "corn", "durian"]   <-- slicing past an allowed bound returns the max allowed, don't worry about the remainder
array.slice(-1000, 3) // ["apple", "banana", "corn"]   <-- same for negatives 
mixedArray.sort() // [-85, 100.234, "apple", "corn"]   <-- array will attempt to sort.
///
array.pop() // "durian"   <-- removes the last value in an array and returns it
console.log(array) // ["apple", "banana", "corn"]   <-- pop doesn't just get a value, it REMOVES it. This is both eval and change
// NOTE: you should avoid popping in an iterative solution - it's weird! Opt for 'while' or something else that takes into account the fact that the loop is changing.
///
array.unshift("flour") // 5   <-- doesn't actually return a value itself, just a length
console.log(array) // ["flour", "apple", "banana", "corn", "durian"]   <-- the array itself however has been changed!

// EVAL FUNCTIONS
array.every((value) => { value.length > 3 }) // true   <-- self-defined function is checked for every value; if anything comes back false the result is false (e.g. replacing 3 with 4 would return false because a single value, "corn", returns false)
str.split('').every((value, i) => { return value === str[str.length - i - 1] })
array.includes("banana") // true
array.includes("ban") // false   <-- partials not included
array.includes(array) // false   <-- fails for partial arrays too like ["apple"]


// TO STRING
array.join() // "apple,banana,corn,durian" <-- default includes commas
array.join('') // "applebananacorndurian" 
array.join(' + ') // "apple + banana + corn + durian"

// MISC -----------------------------

// assigning new positions to arrays
array[3] = "hello" // [, , , "hello"]
array[3] = null // [, , , null] 
// If we assign an array position a value it will automatically fill any "missing" predecessors with null values. This is suuuper helpful for developing arrays w/o fixed starting or ending points. Don't populate an array with null, just push it!

// reusing block array
let subarray = ["peanut", null]
let array = [];
array.push(subarray)
array.push(subarray)
array[0][1] = "hello"
console.log(array) // [["peanut", "hello"], ["peanut", "hello"]]
// subarrays retain their shared relation so changing one changes the others. Unless you WANT this behavior you should really avoid assigning subvalues like this



