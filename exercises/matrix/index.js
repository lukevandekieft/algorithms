// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // needs error handling for non-int, 0, & negative n values

  let spiralMatrix = [];
  for (let i = 0; i < n; i++) {
    let subMatrix = [];
    for (let i = 0; i < n; i++) {
      subMatrix.push('');
    }
    spiralMatrix.push(subMatrix);
  }

  let counter = 1;
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;


  const printMatrix = (nthCall) => {
    if (nthCall % 4 === 0) {
      printRowRight();
    } else if (nthCall % 4 === 1) {
      printColumnDown();
    } else if (nthCall % 4 === 2) {
      printRowLeft();
    } else if (nthCall % 4 === 3) {
      printColumnUp();
    }

    if (counter <= n * n) {
      printMatrix(nthCall + 1)
    }
  }

  const printRowRight = () => {
    for(let i = leftColumn; i <= rightColumn; i++) {
      spiralMatrix[topRow][i] = counter;
      counter++;
    }
    topRow++;
  }
  const printColumnDown = () => {
    for(let i = topRow; i <= bottomRow; i++) {
      spiralMatrix[i][rightColumn] = counter;
      counter++;
    }
    rightColumn--;
  }
  const printRowLeft = () => {
    for(let i = rightColumn; i >= leftColumn; i--) {
      spiralMatrix[bottomRow][i] = counter;
      counter++;
    }
    bottomRow--;
  }
  const printColumnUp = () => {
    for(let i = bottomRow; i >= topRow; i--) {
      spiralMatrix[i][leftColumn] = counter;
      counter++;
    }
    leftColumn++;
  }

  printMatrix(4);

  // try note: I decided not to dry this up more: any shrinking would make it harder to read
  // try note: math option? matrix[n] = {lots of math}, matrix[n-1] = {lots of math}
  // BIGGEST ERRORS:
  // *   .push().repeat() does not work, I opted for ForLoops
  // *   subarrays pushed multiple times are TIED TOGETHER. They must be created separately for some reason?


  return spiralMatrix;
}

module.exports = matrix;

// ************* RESULTS ******************
// My solution was... actually the main answer? I'm pretty surprised by that. It was long-coming but did get there. There are two main edits they did that I like:
// *   They used a while loop with 4 functions in it. Both the while loop and internal functions had checks to make sure they didn't run extra times. It looked cleaner.
// *   Arrays do NOT need to be populated like a feared! My entire issue with shared arrays would be avoided if I just assigned array[i] without worrying.
