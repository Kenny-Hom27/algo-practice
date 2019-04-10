// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, row=0, py="") {
  if (row === n) return 

  if (py.length === 2*n-1) {
    console.log(py)
    return pyramid(n, row+1)
  }

  if (!py.length) {
    py += "#"
  } else if (py.length <= row*2-1) {
    py = "#" + py + '#'
  } else {
    py = " " + py + " "
  }

  pyramid(n, row, py)
}

// function pyramid(n) {

//   for (let i=0; i<n; i++) {
//     let pyramid = ""

//     for (let j=0; j<n; j++) {
//       if (j === 0) {
//         pyramid += '#'
//       } else if (j<= i) {
//         pyramid = '#' + pyramid + '#'
//       } else {
//         pyramid = ' ' + pyramid + ' '
//       }
//     }

//     console.log(pyramid)
//   }
// }

module.exports = pyramid;
