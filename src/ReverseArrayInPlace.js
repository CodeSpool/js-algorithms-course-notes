function reverseArrayInPlace (arr) {
  for (let i = 0, last = arr.length - 1; i < last / 2; i += 1) {
    let temp = arr[i]
    arr[i] = arr[last - i]
    arr[last - i] = temp
  }
  return arr
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
