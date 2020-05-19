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

  size (node = this.head, counter = 0) {
    if (node) {
      return this.size(node.next, counter + 1);
    } else {
      return counter;
    }
  }
  // alternatively:
  // while (node) {
    // counter++;
    // node = node.next
  // }

  getFirst () {
    return this.head;
  }

  getLast () {
    let currentNode = this.head;
    let lastNode = null;
    while (currentNode) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        lastNode = currentNode;
        currentNode = null;
      }
    }
    return lastNode;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) {
      this.head = null;
      return
    }

    this.head = this.head.next;
  }
  // NOTE: edited solution to only have 1 if statement. This is useful for reviewing: can flipping a statement let us use fewer checks?

  removeLast () {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let lastNode = null;
    while (currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
    lastNode.next = null;
  }
}

module.exports = { Node, LinkedList };
