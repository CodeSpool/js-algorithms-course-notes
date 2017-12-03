function fibonacciMemoized (position, cache = []) {
  if (cache[position]) return cache[position]
  else {
    if (position < 3) return 1
    cache[position] = fibonacciMemoized(position - 1, cache) + fibonacciMemoized(position - 2, cache)
    return cache[position]
  }
}

console.log(fibonacciMemoized(1000))
