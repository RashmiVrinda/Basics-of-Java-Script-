// Exercise Question

// Write a JavaScript function called getVowelCount(str) that takes a string as input and returns how many vowels (a, e, i, o, u) are inside the string.

// Requirements:

// Loop through each character in the string.

// Use includes() to check if the character is a vowel.

// Use count++ to increase the count each time a vowel is found.

// Return the total number of vowels.

// Example:
// Input: "umbrella"
// Output: 3



function getCount(str) {
  let vowels = ("aeiou");
  let count = 0;
  for (let char of str)
  {if (vowels.includes(char)){count++;

  }

}

return count;}

console.log(getCount("what is your name "));