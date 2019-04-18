// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const final = [0];

  let arr = [root, "stop"];

  while (arr.length > 1) {
    let current = arr.shift();

    if (current === "stop") {
      final.push(0);
      arr.push('stop')
    } else {
      arr.push(...current.children);
      final[final.length - 1]++;
    }
    
  }
  return final;
}

module.exports = levelWidth;
