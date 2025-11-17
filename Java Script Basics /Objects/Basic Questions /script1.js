
// Exercise 2: Add a Method

// Create an object called person with:

// name

// age

// a method greet() that prints: "Hello, my name is ___".

// Call the method.



const person = {name: "Hero",
  age: 22,
 greet(){console.log("Hello, my name is" + this.name );}};

person.greet();
console.log(person);