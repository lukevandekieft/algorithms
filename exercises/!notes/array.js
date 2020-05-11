array = ["apple", "banana", "corn"]
value = "meal"

// CHANGE FUNCTIONS
array.reverse() // [ "corn", "banana", "apple" ]
array.concat()
array.reduce((accumulator, currentValue) => accumulator + currentValue, value); // "mealapplebananacorn"; value is optional and is a starting value. With numbers these will actually add

// EVAL FUNCTIONS
array.every((value) => { value.length > 3 }) // true   <-- self-defined function is checked for every value; if anything comes back false the result is false (e.g. replacing 3 with 4 would return false because a single value, "corn", returns false)
str.split('').every((value, i) => { return value === str[str.length - i - 1] })

// TO STRING
array.join() // "apple,banana,corn" <-- default includes commas
array.join('') // "applebananacorn" 
array.join(' + ') // "apple + banana + corn"


