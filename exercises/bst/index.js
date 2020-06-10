// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert (number) {
    const placeNumberInTree = (currentNode) => {
      if (number < currentNode.data) {
        if (currentNode.left) {
          placeNumberInTree(currentNode.left)
        } else {
          currentNode.left = new Node(number);
        }
      } else if (number > currentNode.data) {
        if (currentNode.right) {
          placeNumberInTree(currentNode.right)
        } else {
          currentNode.right = new Node(number);
        }
      } else {
        console.log("Error, number equals node value");
      }
    }
    placeNumberInTree(this);
  }
  // ****************** RESULTS **********************
  // Right idea but placeNumberInTree is overkill. Try to make insert itself recursive by running the function directly on a node (e.g. this.left.insert(data) vs. placeNumberInTree(this.left) )

  contains(number) {
    if (number < this.data && !this.left) {
      return null;
    } else if (number < this.data && this.left.data === number) {
      return this.left;
    } else if (number < this.data && this.left.data !== number) {
      return this.left.contains(number);
    } else if (number > this.data && !this.right) {
      return null;
    } else if (number > this.data && this.right.data === number) {
      return this.right;
    } else if (number > this.data && this.right.data !== number) {
      return this.right.contains(number)
    }
  }
}
// *************** RESULTS *********************************
// Mostly correct but I forgot that recursive functions must be returned. BIG error here!
// The given answer made this easier by checking if this.data === number at the very beginning  - this would save a good couple statement blocks!

module.exports = Node;

