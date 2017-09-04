# Harmless Ransom Note

## The problem

Write a function `f(N, M)` that takes two strings `N, M` and returns true if `M` contains all the words needed to build `N` and false otherwise.

A single word from `M` can be used only once.

## Concepts

### Hash Table
- powerful concept used in many algorithms
- in the example it is used to store all the words as keys and number of occurrences as values

## Notes:

### **Time complexity and Big O Notation**
- determines how scalable an algorithm is and allows us to estimate the worst case run time of an algorithm

#### Constant runtime
- *O (1)*
- no mather the input, the runtime never changes

example:
```javascript
function logFirstTwo(arr) {
  console.log(arr[1])
  console.log(arr[2])
}
```

#### Linear runtime
- *O (n)*
- runtime increases proportionally to the input size

example:
```javascript
function logAll(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i])
  }
}
```

#### Exponential runtime
- *O (n^2)*
- runtime grows exponentially as input size grows
- very inefficient on large input sizes

example:
```javascript
function logAll(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      console.log(arr[i] + arr[j])
    }
  }
}
```

#### Logarithmic runtime
- *O (log n)*
- every operation is cutting the input (in half in binarySearch example)
- very powerful and efficient  

example:
```javascript
function binarySearch(arr, key) {
  let low = 0
  let high = arr.length - 1
  let mid
  let element

  while (low < high) {
    mid = Math.floor((low + high) / 2, 10)
    element = arr[mid]
    if (element < key) {
      low = mid + 1
    } else if (element > key) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
```

### Solution complexity

Solution has linear complexity, *O(n)*

It has two loops but those are not nested

More speciffic: *O(n + m)* (linear complexity of both loops)