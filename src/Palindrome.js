function isPalindrome (string) {
  string = string.toLowerCase()
  const charactersArr = string.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const lettersArr = []
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })

  return lettersArr.join('') === lettersArr.reverse().join('')
}

isPalindrome("Madam, I'm Adam")
