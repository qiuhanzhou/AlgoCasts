// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const splitedArr = str.split('')

  const reversed = splitedArr
    .map((char, i, arr) => arr[arr.length - i - 1])
    .join('')
  return reversed

  // 2nd option: const reversed = splitedArr.reverse().join('')

  //3rd option: let reversed=''
  //for (let char of str){
  //   reversed = char + reversed
  // }

  //return splitedArr.reduce((reversed, curchar)=>{
  //  return curchar+reversed
  // },'')
}

module.exports = reverse
