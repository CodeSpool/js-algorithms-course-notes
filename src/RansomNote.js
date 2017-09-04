// d
function harmlessRansomNote (noteText, magazineText) {
  let noteArr = noteText.split(' ')
  let magazineArr = magazineText.split(' ')
  let noteIsPossible = true

  const magazineObj = {}

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0
    }
    magazineObj[word]++
  })

  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--
      if (magazineObj[word] < 0) {
        noteIsPossible = false
      }
    } else {
      noteIsPossible = false
    }
  })
  return noteIsPossible
}

harmlessRansomNote('this is a note', 'note that this is noted in a notebook')
