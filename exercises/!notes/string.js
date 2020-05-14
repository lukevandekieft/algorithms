string = "corn"
value = "meal"
weirdString ="SoOo WeIrd!!1"

// CHANGE FUNCTIONS
string.concat(value) // "cornmeal"
string.concat(value.charAt(3)) // "cornl"
string.toUpperCase() // "CORN"
string.toLowerCase() // "sooo weird!!1"   <-- other characters ignored for both functions
weirdString.replace(/o/, "x") // "SxOo WeIrd!!1"   <-- replace first part with second. Here we only replace the first match.
weirdString.replace(/o/g, "x") // "SxOx WeIrd!!1"  <-- the g flag expands the search to replace every instance of __
string.repeat(3) // "corncorncorn"   <-- useful for repeating individual amounts dynamically
string.repeat(0) // ""

// EVAL FUNCTIONS
string.indexOf("rn") // 2
string.length // 4
string.includes("c") // true
string.includes("corn") // true
weirdString.match(/o/g)) // ['o', 'o']   <-- two matches, each put into array 
weirdString.match("o")) // ['o', index: 1, input: 'SoOo WeIrd!!1', groups: undefined]   <-- weird input, look into this more
weirdString.match(/u/g)) // null   <-- note that we don't get empty array!

// TO ARRAY
string.split('') // [ "c", "o", "r", "n" ]
string.split('o') // [ "c", "rn" ]


//******************
// TO NUMBER
intValue = "123"
negIntValue = '-8900'
zeroStart = "077"
decimalNumber = "+60.0023"
eNumber = "6e23"
mixedNumber = "+6.022e23"

parseInt(intValue, 10) // 123
parseInt(negIntValue, 10) // -8900
parseInt(zeroStart) // 77    <-- modern browsers; 8 <-- old browsers
parseInt(zeroStart, 10) // 77    <-- ALWAYS specify radix to avoid possibility of defaulting to octal (0..) or hexadecimal (0x...)
parseInt(decimalNumber, 10) //    60 <-- parseInt stops at the first non-numeral character and returns everything up to that point. The one exception is +/- which, if the first integer, is applied. Leading white space is ignored 
parseInt(eNumber, 10) // 6   <-- e numbers fail because they include non-numeric character
parseInt(mixedNumber, 10) // 6   <-- + accepted, . rejected, e not a problem because parsing already stopped)