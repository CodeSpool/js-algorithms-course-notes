function sieve (target) {
  const primesArr = new Array(target).fill(true)
  primesArr[0] = false
  primesArr[1] = false
  for (let i = 2, max = Math.sqrt(target); i < max; i++) {
    for (let j = 2; j * i <= target; j++) {
      primesArr[i * j] = false
    }
  }

  return primesArr.map((val, index) => {
    if (val) return index
  }).filter(val => val)
}

console.log(sieve(200))
