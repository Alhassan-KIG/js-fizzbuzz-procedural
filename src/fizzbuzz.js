const answer = []

// Write your code below this line

for (let i = 0; i <= 15; i++) {
  if((i % 3 == 0) && (i % 5 == 0)){
    console.log(i, 'FizzBuzz');
  }else if (i % 3 == 0){
    console.log(i, 'Fizz')
  }else if (i % 5 == 0) {
    console.log(i, 'Buzz')
  }
}
// Don't touch the code below this line, we'll cover it later
module.exports = answer
