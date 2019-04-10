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

function steps(n, row=0, stair="") {
  if (row === n) return 

  if (stair.length === n) {
    console.log(stair)
    return steps(n, row+1, "")
  }

  if (stair.length <= row) {
    return steps(n, row, stair+'#')
  } else {
    return steps(n, row, stair+" ")
  }
}

// function steps(n) {

//   for (let i=0; i<n; i++) {
//     let temp = ""
//     for (let j=0; j<n; j++) {

//       if (j <= i) {
//         temp += '#'
//       } else {
//         temp += " "
//       }
//     }

//     console.log(temp)
//   }

// }

module.exports = steps;
