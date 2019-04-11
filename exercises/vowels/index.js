// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = "aeiou".split("")
  let count = 0

  for (let i=0; i<str.length; i++) {
    let letter = str[i].toLowerCase()

    if (vowels.indexOf(letter) !== -1) {
      count++
    }
  }

  return count
}

module.exports = vowels;
