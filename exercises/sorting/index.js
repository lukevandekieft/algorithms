// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // loop over array
  // sort each item until in correct location
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
  
    }
  }
  return arr;
}
// *********** RESULTS ***************
// I struggled to think of this problem correctly: I am not looking for the perfect spot for each number, I am sweeping the entire array to push the biggest number to the end every time, HENCE BUBBLING. The second for() is one shorter every time because I can take it as a given that the end of the array is correct.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let minValue = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = minValue;
    }
  }

  return arr;
}
// *********** RESULTS *************
// I pretty much solved this. The only error was not moving the -1 to a + 1: I want to skip the FIRST element now, not the LAST one.

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}
// ************ RESULTS ******************
// answer was given. Once again the recursion "return" got me: in this case they are passing the function in both sides of the problem. Sneaky!

function merge(left, right) {
  let sortedArray = [];
 
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  sortedArray.push(...left);
  sortedArray.push(...right);

  return sortedArray;
}
// ************* RESULTS ******************
// Solved but I like their ES6 combination: [...results, ...left, ...right]

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
