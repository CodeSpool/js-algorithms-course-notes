# Two Sum

## The problem

Write a function `f(N, M)` that accepts an array N and an integer M and returns an array filled with every pair of numbers from N that adds up to the M
- result should be array of arrays
- a number from N can be used in multiple pairs

## Concepts
- reuse hash table
  - store a counterpart of a number iterating over and check if there is one stored (sum = currentNumber + counterpart)

## Note
- possible to build both in O (n^2) and O (n) complexity
- try and figure out the O (n) sulution
