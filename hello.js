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
// console.log("Hello #1508")

// var, const, let and the lower camel case
// Note: use backticks (`) for interpolation


// CONST CANNOT be reassigned
const student = "Leo";
// student = "Super Leo"; // DOESNT WORK
// console.log(student);

// LET CAN be reassigned
let age = 21;
console.log(student, age);
age += 1
console.log(age);

// interpolation
console.log(`${student} is ${age} years-old`);

// no float/integer
console.log(typeof(3.14));
console.log(typeof(3));

// how toString/parseInt works
// Note: toString doesn’t work without ()

// .to_s
console.log((3.14).toString());

// .to_i
console.log(parseInt("3.14", 10));
console.log(parseFloat("3.14", 10));

// delete element in an array with splice
const students = [
  "Glenn",
  "Koji",
  "Ruby",
  "Justin"
];

console.log(students);
students.splice(1,2); // removes 2 elements starting from index 1
console.log(students);


// iterate over an array
// JS arrow function () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// [1,2,3].join()
// ---> '1,2,3'
// [1,2,3].join("")
// ---> '123'

// object, the magic dot!
const anotherStudent = {
  firstName: "Koji",
  lastName: "Mimura" 
};

console.log(anotherStudent["firstName"]);
console.log(anotherStudent.firstName);

anotherStudent.firstName = "Super Koji";
console.log(anotherStudent);


// ===
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
console.log("hello" == "hello");
console.log(0 == 0);
console.log(0 == "0");
console.log(0 === "0");


// the JS falsies:
null //nil
undefined //nil
false //false
0
""
NaN


// JS arrow functions () => {}
// Note: they look like a 'very special' variable
// const add = (aNumber, anotherNumber) => {
//   return aNumber + anotherNumber;
// };

// console.log(add(2,4));

// one liner version
const add = (aNumber, anotherNumber) => aNumber + anotherNumber;
console.log(add(2,4));
