// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // vet that 'root' is correct Type

  let finalArray = [];
  let currentParentArray = [root];
  let childArray = [];

  while (currentParentArray.length > 0) {
    let counter = 0;
    for (let node of currentParentArray) {
      childArray.push(...node.children);
      counter++;
    }
    finalArray.push(counter);
    currentParentArray = childArray;
    childArray = [];
  }

  return finalArray;
}

module.exports = levelWidth;

// *************** RESULTS *****************
// First try! I really think my solution is cleaner than the provided one too