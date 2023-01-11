// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const splitedArr = str.split('')
  const half = splitedArr.length / 2
  const firstHalf = splitedArr.slice(0, Math.ceil(half))
  const secondHalf = splitedArr.slice(Math.floor(half), splitedArr.length)
  const reveredSecond = secondHalf.reverse()
  return reveredSecond.every((char, i) => char === firstHalf[i])

  // reverse and see if same
  // return splitedArr.every((char, i, arr) => char === arr[arr.length - i - 1])
}

module.exports = palindrome
