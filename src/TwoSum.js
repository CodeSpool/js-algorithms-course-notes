function twoSum (arr, targetSum) {
  const hashTable = []
  const pairs = []
  arr.forEach(num => {
    const counter = targetSum - num
    if (hashTable.indexOf(counter) > -1) {
      pairs.push([num, counter])
    }
    hashTable.push(num)
  })
  return pairs
}

const result = twoSum([40, 11, 19, 17, -12], 28)
console.log(result)
