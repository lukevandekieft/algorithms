// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor () {
    this.coreStack = new Stack();
  }

  add (value) {
    this.coreStack.push(value);
  }

  remove () {
    let compareStack = new Stack();
    while (this.coreStack.peek()) {
      compareStack.push(this.coreStack.pop());
    }
    const returnValue = compareStack.pop();

    while (compareStack.peek()) {
      this.coreStack.push(compareStack.pop());
    }
    return returnValue;
  }

  peek () {
    let compareStack = new Stack();
    while (this.coreStack.peek()) {
      compareStack.push(this.coreStack.pop());
    }
    const returnValue = compareStack.peek();

    while (compareStack.peek()) {
      this.coreStack.push(compareStack.pop());
    }
    return returnValue;
  }
}

module.exports = Queue;


// test note: in constructor we define with "this.var", not "const var" 
// NOTE: use peek not added functionality
// ********************* RESULT ******************
// Kinda worked? I really had the right idea, the core here is implementation.
// You CANNOT iterate through a popped stack!