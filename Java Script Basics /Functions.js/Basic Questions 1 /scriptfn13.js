// 📌 Task

// Create a function named findLargest that:

// Takes one parameter: an array of numbers

// Returns the largest number in the array

// Does not print anything

// Example behavior (for understanding only):
// findLargest([3, 7, 2, 9]) → 9

function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargest([3, 7, 2])); // 7
