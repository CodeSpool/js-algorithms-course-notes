function mergeSort (arr) {
  const len = arr.length
  if (len < 2) return arr
  const midIndex = Math.floor(len / 2)
  return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex)))
}

function merge (arr1, arr2) {
  const result = []
  while (arr1.length && arr2.length) {
    let minElem
    if (arr1[0] < arr2[0]) minElem = arr1.shift()
    else minElem = arr2.shift()
    result.push(minElem)
  }
  return result.concat(arr1, arr2)
}

console.log(mergeSort([4, 7, -4, 3, -7, 4, 9, 2]))
