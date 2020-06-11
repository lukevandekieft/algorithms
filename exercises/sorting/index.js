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

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
