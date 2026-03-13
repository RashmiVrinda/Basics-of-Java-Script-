// Return the first element of an array

// const first = arr => arr[0]
// console.log (first([10,20,30]));

// Create an arrow function that returns the last element of an array.

// const last = arr => arr[arr.length -1];
// console.log(last([1,2,4]));

// const result = arr => arr.reduce((total,num)=> total + num,0);

// console.log(result([2,2,2]));

// const result = arr => arr.reduce((total,num)=> total + num + 0);

// console.log(result([34,56,78]));

// const result = arr => Math.max(...arr);
// console.log(result([13,21,377]));

// const result = arr => Math.min(...arr);
// console.log(result([13,21,377]));

// const result = arr => arr.map((num) => num+num);
// console.log(result([1,2,5]));

// const returnEven = arr => arr.filter((num) => num % 2 === 0)
// console.log(returnEven([1,2,5]));

// const returnOdd = arr => arr.filter((num)=> num %2)
// console.log(returnOdd([1,2,5,89,67,22,3,1,0]));

// const returnSquare = arr => arr.map((num) => num*num);
// console.log(returnSquare([1,2,5]));

// const addOne = arr => arr.map((num) => num + 1);
// console.log(addOne([1,2,5]));

// const sumEven = (arr) =>
//   arr.filter((num) => num % 2 === 0).reduce((total, num) => total + num, 0);
// console.log(sumEven([1, 2, 3, 6, 7, 8, 9, 10]));

//  const stringLengths = arr => arr.map ((string) => string.length);
//  console.log(stringLengths(["hi","hello","hey"]));

// const toUpperAll = arr => arr.map((string) => string.toUpperCase());
// console.log (toUpperAll(["hi","hello","hey"]));

// const longStrings = arr => arr.filter((string) => string.length > 3);
// console.log (longStrings(["hi","hello","hey","javascript"]));

const totalLength = arr => arr.reduce((total,string) => total+string.length,0);
console.log(totalLength(["hi","hello","hey"]));