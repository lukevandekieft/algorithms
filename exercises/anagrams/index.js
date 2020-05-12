// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const createCounterObject = (string) => {
    let counterObject = {};
    for(let char of string) {
      if (counterObject[char]) {
        counterObject[char] = counterObject[char] + 1 || 1;
      } else {
        counterObject[char] = 1;
      }
    }
    // NOTE: the below code accomplishes the same but much quicker. For simple truthy booleans try to use ternary assignment more often
    // for(let char of string) {
    //   counterObject[char] = counterObject[char] + 1 || 1;
    // }
    return counterObject;
  }

  const letterListA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const letterListB = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (letterListA.length !== letterListB.length) {
    return false;
  }
  //NOTE: we could compare Object.key.length rather than string length, meaning we don't need to save a variable

  const letterObjectA = createCounterObject(letterListA);
  const letterObjectB = createCounterObject(letterListB);

  for (let char in letterObjectA) {
    if (letterObjectA[char] !== letterObjectB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

// ****************** RESULTS ******************
// Overall this went ok. This was a good opportunity to brush up on regex and object properties. I could have made the code drier but hey.
// The alternative solution of sorting individual characters, rejoining, and comparing is good too. I NEED to remember when it's optimal to compare the values of things in whole vs. in granular parts - why map through a giant list when I can alphabetize strings and see if they ===?