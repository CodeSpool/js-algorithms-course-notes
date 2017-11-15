function reverseWords (inputString) {
  return inputString.split(' ').map((word) => {
    let newString = ''
    for (let i = word.length; i > 0; i -= 1) {
      newString += word[i - 1]
    }
    return newString
  }).join(' ')
}

console.log(reverseWords('js is great'))
