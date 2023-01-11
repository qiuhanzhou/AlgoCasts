// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const arr = str.split('')

  //first option: using reduce
  // const charMap = arr.reduce((acc, cur) => {
  //   //acc is {}
  //   if (acc.hasOwnProperty([cur])) {
  //     acc[cur]++
  //   } else {
  //     acc[cur] = 1
  //   }
  //   return acc
  // }, {})

  //second option: using empty obj as map
  const charMap = {}
  for (const el of arr) {
    if (charMap[el]) {
      charMap[el]++
    } else {
      charMap[el] = 1
    }
  }

  let maxChar,
    count = 0

  for (const prop in charMap) {
    console.log(prop, charMap[prop])
    //assign first prop and val to maxchar

    if (maxChar === undefined || charMap[prop] > count) {
      maxChar = prop
      count = charMap[prop]
    }

    console.log(maxChar, count)
  }
  return maxChar
}

module.exports = maxChar
