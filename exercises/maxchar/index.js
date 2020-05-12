// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// pre-start: my inclination is to create an empty object and, for each character, increase the value one time. E.g. counter =  {}, if character = c then counter.c++. Then at the end cycle through all for the biggest number(s). This feels cumbersome both to write and run but is the most straightfoward that comes to mind.
function maxChar(str) {
  // test note: we should verify a string is at least 1 character long AND a string
  let characterCounter = {};
  for(let i = 0; i <= str.length - 1; i++) {
    // NOTE: double-think for-loop value. Here we're already subtracting 1 so <= makes sense here. This supports idea of iterating being harder to mess up
    let char = str.charAt(i);
    if (!characterCounter[char]) {
      characterCounter[char] = 1;
    } else {
      characterCounter[char]++
    }
  }
  // NOTE: next time do "= 1" and put the ++ in an "else clause", that way we're not doing an extra step by initializing a "0"

  let highestCharName;
  let highestCharValue = 0;
  // NOTE: I considered this but thought it was messy. My tutorial gave this the clear over saving key pairs which proved difficult.
  for (let char in characterCounter) {
    if (characterCounter[char] > highestCharValue) {
      highestCharValue = characterCounter[char];
      highestCharName = char
    }
  }
  return highestCharName;
}

module.exports = maxChar;

// ************** RESULTS ****************
// I got caught in lots of little traps. Iterating arrays vs. objects? Are saving variables ok? Double-checking my work and not over-thinking seem to be big problems thus far
