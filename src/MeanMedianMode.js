function meanMedianMode (arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

function getMean (arr) {
  let sum = arr.reduce((prev, next) => prev + next, 0)
  return sum / arr.length
}

function getMedian (arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  if (len % 2 !== 0) {
    return arr[Math.floor(len / 2)]
  } else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2
  }
}

function getMode (arr) {
  let modeObj = {}
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
  })

  let maxFreq = 0
  let mode = []
  for (let num in modeObj) {
    if (modeObj[num] > maxFreq) {
      mode = [num]
      maxFreq = modeObj[num]
    } else if (modeObj[num] === maxFreq) {
      mode.push(modeObj[num])
    }
  }
  if (mode.length === Object.keys(modeObj).length) mode = []
  return mode
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]))
