function fizzBuzz (num) {
  for (let i = 1; i <= num; i += 1) {
    if (!(i % 15)) console.log('FizzBuzz')
    else if (!(i % 3)) console.log('Fizz')
    else if (!(i % 5)) console.log('Buzz')
    else console.log(num)
  }
}

fizzBuzz(100)
