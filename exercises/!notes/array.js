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

// EVAL FUNCTIONS
array.every((value) => { value.length > 3 }) // true   <-- self-defined function is checked for every value; if anything comes back false the result is false (e.g. replacing 3 with 4 would return false because a single value, "corn", returns false)
str.split('').every((value, i) => { return value === str[str.length - i - 1] })

// TO STRING
array.join() // "apple,banana,corn,durian" <-- default includes commas
array.join('') // "applebananacorndurian" 
array.join(' + ') // "apple + banana + corn + durian"


