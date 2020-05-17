// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  // let queueOne = new Queue();
  // if (Array.isArray(sourceOne)) {
  //   for (let item of sourceOne) {
  //     queueOne.add(item);
  //   }
  // } else {
  //   queueOne.add(sourceOne)
  // }

  // let queueTwo = new Queue();
  // if (Array.isArray(sourceTwo)) {
  //   for (let item of sourceTwo) {
  //     queueTwo.add(item);
  //   }
  // } else {
  //   queueTwo.add(sourceTwo)
  // }
  
  let queueOne = sourceOne;
  let queueTwo = sourceTwo;
  
  let queueThree = new Queue();
  let queueOneActive = true;
  let queueTwoActive = true;
  
  const addFromQueueOne = () => {
    if (queueOne.peek()) {
      queueThree.add(queueOne.remove())
    } else {
      queueOneActive = false;
    }
  }
  const addFromQueueTwo = () => {
    if (queueTwo.peek()) {
      queueThree.add(queueTwo.remove())
    } else {
      queueTwoActive = false;
    }
  }

  while (queueOneActive && queueTwoActive) {
    addFromQueueOne();
    addFromQueueTwo();
  }
  while (queueOneActive) {
    addFromQueueOne();
  }
  while (queueTwoActive) {
    addFromQueueTwo();
  }
  
  return queueThree;
}

module.exports = weave;

// finished note: I missed that these would be two literal queues, cost myself a big headache. I might blame this on taking multiple days but it's worth double-checking inputs on these questions
// finished note: dynamic variables do NOT work here. I've run into this problem before - how to solve?
// finished note: remember that the best way to check if an array is empty is to check its length

// ***************** RESULTS *************************
// Took me way too long. See notes above on errors.
// We can simply do "return array[n - 1]" instead of checking array.length, since a returned empty can be read to infer the same

// CLEANER ANSWER:
// while (sourceOne.peek() }} sourceTwo.peek()) {
  // if (sourceOne.peek()) {
      // function
  // } ...
// }