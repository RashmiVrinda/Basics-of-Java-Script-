// Exercise -1 //
// Create a function that logs a tea's name and origin in the format "Sencha (Japan)". 
// Assign it to a variable called logTea. Call it with the first tea in the array.

// import {teas} from "./teas.js";

// const logTea = tea => console.log (`${tea.name} (${tea.origin})`);
// logTea(teas[0]);

// Exercise 2 //

// Create a function called functionRunner that takes a function as a parameter and calls it.

// function functionRunner(fn) {
// fn()
// // }

// // Test it:
// functionRunner(function () {
//   console.log("I was called!");
// });

// // // Also test with a function variable:
// const sayHello = function () {
//   console.log("Hello!");
// };
// functionRunner(sayHello);
//ex3
// const functions = [
//   function () {
//     console.log("First");
//   },
// function () {
//     console.log ("Second");
// },
// function() { console.log ("Third")}
// ];

// for (let i = 0; i < functions.length; i++) {
//   functions[i](); // call each function
// }
// Exercise 4 ⭐

// Create a function createGreeter(greeting) that returns a new function. 
// The returned function should take a name and log the greeting with the name.

// const sayHello = createGreeter("Hello");
// const sayHi = createGreeter("Hi");

// sayHello("Alice"); // "Hello, Alice!"
// sayHi("Bob"); // "Hi, Bob!"

// const createGreeter = greeting => {
//     return(name) => { console.log ( `${greeting}, ${name}!`)};
    
// }
// const sayHello = createGreeter("Hello");
// const sayHi = createGreeter("Hi");

// sayHello("Alice"); // "Hello, Alice!"
// sayHi("Bob"); // "Hi, Bob!"

// Exercise 5
// Use reduce to calculate the total stockCount across all teas.
// const totalStock = teas.reduce((sum, tea) => {
// return sum + tea.stockCount;
// }, 0);

// console.log(totalStock); // sum of all stockCount values


// Exercise 6

// Calculate the total inventory value: the sum of pricePerGram * stockCount for each tea.

// const inventoryValue = teas.reduce((sum, tea) => 
// sum + tea.pricePerGram * tea.stockCount,0);
// console.log(inventoryValue);

// Exercise 7
// Use reduce to count how many teas of each type exist.

// const countByType = teas.reduce((counts, tea) => {

//   counts[tea.type] = counts[tea.type]
//     ? counts[tea.type] + 1
//     : 1;

//   return counts;

// }, {});

// console.log(countByType);

// Exercise 8 
// Use reduce to group tea names by their origin country.

// const groupedByOrigin = teas.reduce((groups, tea) => {

//   groups[tea.origin]
//     ? groups[tea.origin].push(tea.name)
//     : groups[tea.origin] = [tea.name];

//   return groups;

// }, {});

// console.log(groupedByOrigin);

// exercise 9
// Create your own myForEach(array, callback) function that works like the built-in forEach.
// const myForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };

// myForEach(teas, function (tea) {
//   console.log(tea.name);
// });

// myForEach(teas, (tea) => {
//   console.log(tea.name);
// });
// Exercise 10

// Create your own myMap(array, callback) function that works like the built-in map.
// const myMap = (array, callback) => {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i]));
//   }

//   return result;
// };

// // Test
// const names = myMap(teas, (tea) => {
//   return tea.name;
// });

// console.log(names);

// Exercise 11 ⭐

// Create your own myFilter(array, callback) function that works like the built-in filter.

// function myFilter(array, callback) {
//   // your implementation
// }

// // Test it:
// const organic = myFilter(teas, function (tea) {
//   return tea.organic;
// });
// console.log(organic.length); // number of organic teas

// const myFilter = (array, callback) => {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       result.push(array[i]);
//     }
//   }

//   return result;
// };

// // Test it
// const organic = myFilter(teas, (tea) => tea.organic);

// console.log(organic.length);

// Exercise 12

// What order will these console.logs appear?
// //  Write your prediction first, then run the code to check.
// console.log("1. Starting");

// setTimeout(() => {
//   console.log("2. Timeout done");
// }, 1000);

// console.log("3. Continuing");

// // Exercise 13

// // Create a function runAfterDelay(delay, callback) 
// // that waits delay milliseconds, then calls the callback.

// function runAfterDelay(delay, callback) {
//   // use setTimeout
// }

// // Test it:
// runAfterDelay(2000, function () {
//   console.log("This runs after 2 seconds");
// });

// runAfterDelay(1000, function () {
//   console.log("This runs after 1 second");
// });

// console.log("This runs immediately");

// function runAfterDelay(delay, callback) {
//   setTimeout(callback, delay);
// }

// // Test it
// runAfterDelay(2000, function () {
//   console.log("This runs after 2 seconds");
// });

// runAfterDelay(1000, function () {
//   console.log("This runs after 1 second");
// });

// console.log("This runs immediately");

// function findTeaById(id, callback) {
//   setTimeout(() => {
//     const tea = teas.find(tea => tea.id === id);
//     callback(tea);
//   }, 500);
// }

// // Test it
// console.log("Looking up tea...");

// findTeaById(3, function (tea) {
//   console.log("Found:", tea.name);
// });

// console.log("Request sent, waiting...");


// const findTeaById = (id, callback) => {
//   setTimeout(() => {
//     const tea = teas.find(tea => tea.id === id);
//     callback(tea);
//   }, 500);
// };

// findTeaById(1, function (tea) {
//   console.log("Got:", tea.name);
// });


// findTeaById(1, function (tea) {
//   console.log("Got:", tea.name);
// });

// findTeaById(5, function (tea) {
//   console.log("Got:", tea.name);
// });

// findTeaById(10, function (tea) {
//   console.log("Got:", tea.name);
// });

// console.log("All requests sent!");


// import fs from "fs";

// fs.readFile("./orders.json", { encoding: "utf8" }, function (error, data) {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   // 1. Parse the JSON string into an array
//   const orders = JSON.parse(data);

//   // 2. Log the number of orders
//   console.log("Number of orders:", orders.length);
// });
 import fs from "fs";
import {teas} from "./teas.js";

fs.readFile("./orders.json", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  const orders = JSON.parse(data);

  orders.forEach(order => {
    let total = 0;

    order.items.forEach(item => {
      const tea = teas.find(t => t.id === item.teaId);

      if (tea) {
        total += tea.pricePerGram * item.grams;
      }
    });

    console.log(
      `Order ${order.id}: ${total.toFixed(2)} DKK (${order.items.length} item${order.items.length > 1 ? "s" : ""})`
    );
  });
});
