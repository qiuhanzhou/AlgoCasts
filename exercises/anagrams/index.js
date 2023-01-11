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
  // option 1 - compare stringA & stringB
  // const regex = /[a-zA-Z]+/g
  // const resultA = stringA
  //   .match(regex)
  //   .join('')
  //   .split('')
  //   .sort()
  //   .join('')
  //   .toLowerCase()
  // const resultB = stringB
  //   .match(regex)
  //   .join('')
  //   .split('')
  //   .sort()
  //   .join('')
  //   .toLowerCase()
  // return resultA === resultB

  //option 2 - build map of chars & compare

  function buildMap(str) {
    let map = {}
    for (const char of str.replace(/[^\w]/g, '')) {
      if (str[char]) {
        map[char]++
      } else {
        map[char] = 1
      }
    }
    return map
  }

  const mapA = buildMap(stringA)
  const mapB = buildMap(stringB)
  //loop over mapA and see if every one is same as in mapB
  for (const char in mapA) {
    console.log(mapA[char])
    console.log(mapB[char])
  }
}

module.exports = anagrams
