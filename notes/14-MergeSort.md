# Merge sort

## The problem

Write a function `f(N)` that accepts an array of numbers N and returns it sorted

## Concepts
- compare first elements of sorted arrays and take the smaller
- array of 1 element is always sorted
  - split the array recursively, length < 2 is the base case
  - start combining those arrays by sorting and merging

## Notes
- use a helper function for merging