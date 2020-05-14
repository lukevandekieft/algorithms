// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

  function capitalize(str) {
    
    // progress note: This fails to catch inter-word capitals like deVries names.
    capFirstLetter = str.replace(/\w/, function(char) { return char.toUpperCase()});
    // progress note: separating these simply makes it cleaner to me. Still a little ugly.
    return capFirstLetter.replace(/(?<=\s\W*)\w/g, function(char) { return char.toUpperCase()});
  }

  // NOTE: the key here is defining a word as anything separated by a space. THis is roughly true given that even parentheses, hyphens, etc. will be ignored or considered based on this. Considering this fact greatly eased my solution

module.exports = capitalize;

// ******************* RESULTS **************************
// Ultimately my in-mind solution worked really well even if I had to google a lot of Regex.
// Big failure was getting caught in a rut: I didn't think expansively about using spaces for words and instead gave up initially as "needing a library". I should be more open-ended when thinking about and discussing these problems so interviewers don't see me totally giving up.
// First time my solution is better than the prompt!