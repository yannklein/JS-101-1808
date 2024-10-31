// //////////////////////////
// THE 3 BASICS OF A NEW LANG
// //////////////////////////

// 1. The docs:
// - MDN (exhaustive but hard): https://developer.mozilla.org/en-US/docs/Web/JavaScript
// - W3School (easy for beginners): https://www.w3schools.com/js/

// 2. How to run JS?
// To test one line of code, run in the console: node
// To run a file, run in the console: node hello.js

// 3. How to print?
console.log("Hi #1808");


// //////////////////
// RUBY VS JAVASCRIPT
// //////////////////

// 1. var, const, let and the lower camel case

// 'const' CANNOT be reassigned
const firstName = "Jarod";
// firstName = "Super Jarod";

// 'let' CAN be reassigned
let age = 21;
age += 1;

console.log(firstName, age);

// 'var' is the obsolete let (almost!)

// 2. interpolation
// Note: use backticks (`) for interpolation
console.log(`${firstName} is ${age + 10} years-old` + "!");


// 3. no float/integer
console.log(typeof(32 + 42.3));
console.log(typeof(32.4));


// 4. how toString/parseInt works
// Note: toString doesn’t work without ()

// to_s
console.log((42).toString());

// to_i
console.log(parseInt("42", 10));

// can be used to convert into binary

// base-10 binary 
// 0 0
// 1 1
// 2 10
// 3 11
// 4 100
// 5 101

console.log(parseInt("101", 2));

// 5. delete element in an array with splice
const students = [
  "Max",
  "Denis",
  "Claudia",
  "Phyu Phyu"
];

// students.splice(0, 2); // delete 2 elements from index 0
// students.splice(-2, 2); // delete 2 elements from index -2
console.log(students);

// students[-1] // DOESN'T WORK IN JS

// 6. iterate over an array

// students.each do |student|
//   puts "#{student} is amazing"
// end

// JS arrow function () => {}
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// 7. join() returns adds commas
// Ruby:
// students.join ---> "MaxDenisClaudiPhyu Phyu"
// JS:
console.log(students.join()); // ---> Max,Denis,Claudia,Phyu Phyu

// 8. object, the magic dot!
const anotherStudent = {
  firstName: "Adam",
  lastName: "Brunson" 
};

console.log(anotherStudent["firstName"]);
console.log(anotherStudent.firstName);

anotherStudent.firstName = "Super Adam";
console.log(anotherStudent);


// 9. === VS ==
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log(3 == 4);
console.log(3 === 4);

console.log(3 == "3");
console.log(3 === "3");

// 10. the JS falsies:
if ("hello") {
  console.log("This is true!");
}

if ("") {
  console.log("This is true!");
}

false // false
null // nil
undefined
""
0
NaN

// 11. JS arrow functions () => {}
// Note: they look like a 'very special' variable

// const square = (num) => {
//   return num * num
// };

const square = num => num * num;

console.log(square(42));