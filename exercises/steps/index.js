// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // parsing non-number & negatives?

  // Create string with # followed by n_
  let baseStr = '#' + " ".repeat(n - 1);
  console.log(baseStr);

  for(let i = 1; i <= baseStr.length - 1; i++) {
    baseStr = `${baseStr.slice(0, i)}#${baseStr.slice(i + 1)}` 
    console.log(baseStr)
  }

  // solve note: I chose to create an initial setup so that we don't have to repeat string creation on every iteration. The code looks uglier but I think it greatly cuts down on potential repetition - every function here is useful just one time.
}

module.exports = steps;
