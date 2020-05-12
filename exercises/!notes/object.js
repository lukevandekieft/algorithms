let counter = {
  a: 5,
  e: 13,
  i: 2
}
let desiredObj = "a"

// EVAL FUNCTIONS
counter[desiredObj] // 5
counter["a"] // 5
Object.keys(counter) // ['a', 'e', 'i']
Object.keys(counter).length // 3