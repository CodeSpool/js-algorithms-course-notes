function caesarCipher (str, num) {
  num %= 26
  const lowerCaseStr = str.toLowerCase()
  const alphabet = 'absdefghijklmnopqrstuvwxyz'.split('')
  let newString = ''
  for (let i = 0, max = lowerCaseStr.length; i < max; i += 1) {
    const currentLetter = lowerCaseStr[i]
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex -= 26
    if (newIndex < 0) newIndex += 26
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else {
      newString += alphabet[newIndex]
    }
  }
  return newString
}
