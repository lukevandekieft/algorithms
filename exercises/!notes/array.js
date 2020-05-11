array = ["apple", "banana", "corn"]
value = "meal"

// CHANGE FUNCTIONS
array.reverse() // [ "corn", "banana", "apple" ]
array.concat()
array.reduce((accumulator, currentValue) => accumulator + currentValue, value); // "mealapplebananacorn"; value is optional and is a starting value. With numbers these will actually add

// TO STRING
array.join(''); // "applebananacorn"
array.join(' + ') // "apple + banana + corn"


