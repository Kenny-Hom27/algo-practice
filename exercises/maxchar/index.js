// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {}

  for (let char of str) {
    if (!map[char]) {
      map[char] = 1 
    } else {
      map[char] = map[char]++
    } 
  }

  let max = 0
  let maxKey = ""
  Object.keys(map).forEach(key => {
    if (map[key] > max) {
      max = map[key]
      maxKey = key
    }
  })

  return maxKey
}

module.exports = maxChar;
