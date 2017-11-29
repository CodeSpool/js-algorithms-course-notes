function binarySearch (numArr, key) {
  const midIndex = Math.floor(numArr.length / 2)
  const midElem = numArr[midIndex]
  if (midElem === key) return true
  else if (midElem < key && numArr.length > 1) {
    return binarySearch(numArr.splice(midIndex, numArr.length), key)
  } else if (midElem > key && numArr.length > 1) {
    return binarySearch(numArr.splice(0, midIndex), key)
  } else return false
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
