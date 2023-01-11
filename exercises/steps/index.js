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

//1st - iterate method for loop

// for (i = 1; i <= n; i++) {
//   let result = ''
//   for (j = 1; j <= n; j++) {
//     if (j <= i) {
//       result += '#'
//     } else {
//       result += ' '
//     }
//   }
//   console.log(result)
// }

//2nd - str.repeat() method

//3ne - recursive function
function steps(n, row = 1, stair = '') {
  if (n < row) {
    return
  }
  if (n === stair.length) {
    console.log(stair) //print current row
    steps(n, row + 1) //trigger next call with incremented row
    return
  }
  if (stair.length < row) {
    stair += '#'
  } else {
    stair += ''
  }
  steps(n, row, stair) //trigger next call with incremented stair (same row)
}
steps(5)

module.exports = steps

//print 5*4*3*2*1

//recursive function vs. for loop

//1st - for loop:

// let result = 1
// for (let i = 5; i >= 1; i--) {
//   result = result * i // i=5, r= 1*5=5 // r=5*4 //r=5*4*3...
// }
// console.log(result)

//2nd - recursive function:

// let result = 1
// function printFactoral(n) {
//   //ending condition - similar to for loop
//   if (n < 1) {
//     return
//   }
//   result = result * n
//   printFactoral(n - 1) //immediate trigger next call
// }
// printFactoral(5) //initial invoke

// console.log(result)
