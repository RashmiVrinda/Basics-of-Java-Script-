// Calculate sum of two numbers 


//if we directly put console.log inside the function . 
// Output will be 9 and undefined. Because console only prints but doesn't returns the value.
// So its important to return the value.
// we can get output by console.log outside the function, 
// but if we save the value for example here as let result = (sum(4,5)); we can actually use this value and modify. 
// like change number to different numbers or use various mathematic operations like division , multiplication etc 


function sum(x,y) {

  
  return x+y;

}

let result = (sum(4,5));

console.log(result/10);
console.log(result+100);
console.log(result*200);