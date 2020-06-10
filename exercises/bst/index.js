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
}

module.exports = Node;

// ****************** RESULTS **********************
// Right idea but placeNumberInTree is overkill. Try to make insert itself recursive by running the function directly on a node (e.g. this.left.insert(data) vs. placeNumberInTree(this.left) )
