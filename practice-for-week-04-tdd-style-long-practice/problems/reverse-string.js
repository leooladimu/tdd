function reverseString(str) {
  let res = '';
  if (typeof str !== 'string') throw new TypeError
  for (let i = str.length-1; i >= 0; i--) {
    let letter = str[i];
    res = res.concat(letter);
  }
  return res
}

// console.log(reverseString([1, 2]));

module.exports = reverseString;