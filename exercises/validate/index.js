// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if ((max !== null && node.data >= max) || (min !== null && node.data <= min)) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;

// ************** RESULTS ******************
// I was unable to solve this because I didn't know how to recursively return two functions each time. The above answer solves this by checking a boolean result in an if statement: the if statements are repeatedly calling these functions and do something based on the result, either return FALSE or continue on.
