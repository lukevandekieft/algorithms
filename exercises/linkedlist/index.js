// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

// NOTE: linkedlist doesn't come with inherent knowledge of list, just the head and functions for analyzing itself
class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };
