// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let currentNode = list.head;
  let doubledNode = currentNode;

  while (doubledNode) {
    doubledNode = doubledNode.next;
    if (doubledNode) {
      doubledNode = doubledNode.next;
    }

    if (doubledNode) {
      currentNode = currentNode.next;
    }
  }

  return currentNode;
}

module.exports = midpoint;

// ************ RESULTS ***************
// Got the answer but could have written this more cleanly with a shared syntax:
// while (doubledNode.next && doubledNode.next.next)
