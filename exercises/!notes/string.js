string = "corn"
value = "meal"

// CHANGE FUNCTIONS
string.concat(value) // "cornmeal"
string.concat(value.charAt(3)) // "cornl"

// EVAL FUNCTIONS
string.indexOf("rn") // 2
string.length // 4

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