// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// init note: while I'd love to do something excel-style like array[i]:array[i+size] I can't think of an example
function chunk(array, size) {
  let chunkedArray = [];

  let tempArray = [];
  let tempCounter = 0;
  for (let value of array) {
    tempArray.push(value);
    if (tempCounter + 1 === size) {
      chunkedArray.push(tempArray);
      tempArray = [];
      tempCounter = 0;
    } else {
      tempCounter++;
    }
  }
  // NOTE: a cleaner solution is to push directly to chunkedArray and create new elements dynamically, rather than setting up temp values. e.g. ('if the last chunkedArray value.length = size, chunkedArray.push[new], else value.push(new))

  if (tempArray.length > 0) {
    chunkedArray.push(tempArray);
  }

  return chunkedArray;
}

module.exports = chunk;

// ************* RESULTS *************
// my original idea 100% exists! I need to keep the slice method in mind.