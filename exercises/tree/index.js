// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor (data) {
    this.data = data;
    this.children = [];
  }

  add (data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data)
  }
}

class Tree {
  constructor () {
    this.root = null;
  }

  traverseBF(fn) {
    fn(this.root);
    let currentBreadthArray = this.root.children;

    while (currentBreadthArray.length > 0) {
      let nextBreadthArray = [];
      for (let i = 0; i <= currentBreadthArray.length - 1; i++) {
        fn(currentBreadthArray[i])
        // replace for loop with:
        // nextBreadthArray.push(...currentBreadthArray[i].children)
        for (let j = 0; j <= currentBreadthArray[i].children.length - 1; j++) {
          nextBreadthArray.push(currentBreadthArray[i].children[j])
        }
      }
      currentBreadthArray = nextBreadthArray;
    }
    return;
  }

  // does exit case work?
  traverseDF(fn) {
    // vet that fn is actually a function

    if (!this.root) {
      return;
    } else if (!this.root.children || this.root.children.length < 1) {
      fn(this.root);
      return;
    }

    let topLevelArray = this.root.children;
    let printArray = [this.root];

    const iterateChildren = (array) => {
      for (let child of array) {
        printArray.push(child);
        if (child.children && child.children.length > 0) {
          iterateChildren(child.children)
        } else {
          for (let node of printArray) {
            fn(node);
          }
          printArray = [];
        }
        // else case...
        // exit case...
      }
    }

    iterateChildren(topLevelArray);
    return;
  }
}

module.exports = { Tree, Node };

// *********** RESULTS - BF ************
// I got there but I REALLY should have double-checked the function first. Did my object nestings make sense? Did I call the function on EVERY node? These were the dumb mistakes made
// spread operator should be a go-to!

// *********** RESULTS - DF ***********
// Took some thinking but I'm happy with the results! The question itself was incorrect but I had it solved with unshift rather than push - easy switch in the future.