for (let i = 1; i <20; i++) {
    if(i % 15 === 0) {
        console.log('FizzBuzz')
    } else if(i % 5 === 0) {
        console.log('Buzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
} 

//  Another way to do it 

for (let i = 1; i <= 50; i++) 
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }