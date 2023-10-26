// ///////////
// Ruby vs JS
// ///////////

// 1. The docs:
// - MDN (exhaustive but hard): https://developer.mozilla.org/en-US/docs/Web/JavaScript
// - W3School (easy for beginners): https://www.w3schools.com/js/

// 2. How to run JS?
// To test one line of code, run in the console: node
// To run a file, run in the console: node hello.js

// 3. How to print?
// console.log("hello");

// var, const, let and the lower camel case
// Note: use backticks (`) for interpolation
const aGreatStudent = "Guillermo";
let age = 24;

// CONST CANNOT be reassigned
// aGreatStudent = "Super Guillermo";

// LET CAN be reassigned
age += 1;
console.log(aGreatStudent, age);
// interploation
console.log(`I am ${aGreatStudent} ${age} years-old`);

// no float/integer
console.log(typeof(42));
console.log(typeof(3.14));

// how toString/parseInt works
// Note: toString doesn’t work without ()
// .to_i 
console.log("42");
console.log(parseInt("42"));
console.log(parseInt("42", 10));
// .to_s
console.log((42).toString());

// delete element in an array with splice
const students = ['Michael', 'Mario', 'Rina', 'Mao'];
// students.splice(3,1); //=> [ 'Michael', 'Mario', 'Rina' ]
students.splice(2,2); //=> [ 'Michael', 'Mario' ]
console.log(students);

// object, the magic dot!
const student = {
  firstName: "Julien",
  lastName: "Lesueur" 
};

console.log(student["firstName"]);
console.log(student.firstName);

// ===
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// the JS falsies:
null // same as Ruby nil
false // same as Ruby false
undefined
0
NaN
""

// [1,2,3].join()
// ---> '1,2,3'

// JS arrow functions () => {}
// Note: they look like a 'very special' variable
const addition = (aNumber, anotherNumber) => {
  return aNumber + anotherNumber;
};

// one liner version
// const addition = (aNumber, anotherNumber) => aNumber + anotherNumber;

console.log(addition(3,5));