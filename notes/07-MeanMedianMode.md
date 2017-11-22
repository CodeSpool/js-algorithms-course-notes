# Mean Median Mode

## The problem

Write a function `f(N)` that accepts an array N returns an object containing properties for mean, median and mode value of N
- create a sepparate function for each operation

## Concepts
- math calculation techniques:
  - mean: average of all numbers in an array
  - median: middle of the sorted array (average of middle two if length is even)
  - mode: most frequent number(s) in the array
- importance of functional programming

## Note
- use object as a hash table in mode function
- edge case: every number appears at the same frequency:
  - compare number of modes to the number of hash table object keys