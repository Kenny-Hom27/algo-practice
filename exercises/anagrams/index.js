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
  let aCount = createDict(stringA)
  let bCount = createDict(stringB)

  if (Object.keys(aCount).length !== Object.keys(bCount).length) return false 

  for (let key in aCount) {
    if (!bCount[key] || aCount[key] !== bCount[key]) {
      return false
    }
  }

  return true
}

function createDict(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let count = {}

  for (let i=0; i<string.length; i++) {
    let letter = string[i].toLowerCase()
    if (alphabet.indexOf(letter)) {
      if (count[letter]) {
        count[letter]++
      } else {
        count[letter] = 1
      }
    }
  }
  return count
}

module.exports = anagrams;
