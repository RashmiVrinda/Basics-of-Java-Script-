// Problem:
// Write a function called highAndLow(str) that takes a string of space-separated numbers and returns a new string containing the highest and lowest numbers from the input.

// Instructions:

// The input string will contain one or more integers separated by spaces.

// You must extract the numbers, determine which is highest and which is lowest, and return them in a single string.

// The highest number must come first, and the lowest number must come second.

// The two numbers must be separated by one space.

// Examples:

// highAndLow("1 2 3 4 5");       // returns "5 1"
// highAndLow("1 2 -3 4 5");      // returns "5 -3"
// highAndLow("1 9 3 4 -5");      // returns "9 -5"


// Notes:

// All numbers will be valid integers.

// The string will always contain at least one number.
function highAndLow(str) {
  let numbers = str.split(" ").map(Number);  // convert to array of numbers
  
  let highest = numbers[0];
  let lowest = numbers[0];

  for (let num of numbers) {
    if (num > highest) {
      highest = num;
    }
    if (num < lowest) {
      lowest = num;
    }
  }

  return highest + " " + lowest;
}

console.log(highAndLow("1 2 3 4 5"));       // 5 1
console.log(highAndLow("1 2 -3 4 5"));      // 5 -3
console.log(highAndLow("1 9 3 4 -5"));      // 9 -5



