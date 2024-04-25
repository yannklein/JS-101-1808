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
console.log("Hi #1638")

// //////////////////
// RUBY VS JAVASCRIPT
// //////////////////

// 1. var, const, let and the lower camel case

// 'const' CANNOT be reassigned
const student = "Stan";
// student = "Super Stan";
console.log(student);

// 'let' CAN be reassigned
let age = 19;
age += 1;
console.log(age);

// 'var' is the obsolete let (almost!)

// 2. interpolation
// Note: use backticks (`) for interpolation
console.log(`${student} is ${age} years-old.`);

// 3. no float/integer
console.log(typeof(42))
console.log(typeof(42.234))

// 4. how toString/parseInt works
// Note: toString doesn’t work without ()

// to_s
console.log((42).toString());
console.log(parseInt("42", 10));

// can be used to convert into binary
console.log(parseInt("11", 2));
// 0 -> 0
// 1 -> 1
// 2 -> 10
// 3 -> 11

// 5. delete element in an array with splice
const students = [
  "Shuxing",
  "Yoana",
  "Stan",
  "Kim"
];

students.splice(2, 1); // deleting 1 element from element of index 2 
console.log(students);


// 6. iterate over an array
// JS arrow function () => {}

// students.each do |student|
//   puts "#{student} is amazing!"
// end

students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// 7. join() returns adds commas
// [1,2,3].join()
// ---> '1,2,3'
// [1,2,3].join("")
// ---> '123'

// 8. object, the magic dot!
const anotherStudent = {
  firstName: "Rei",
  lastName: "Watanabe" 
};

console.log(anotherStudent["firstName"]);
console.log(anotherStudent.firstName);

anotherStudent.firstName = "Super Rei"
console.log(anotherStudent);

// 9. === VS ==
// sameness in JS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

console.log(3 == 4);
console.log(3 === 4);

console.log(3 == "3");
console.log(3 === "3");

// 10. the JS falsies:
if ("") {
  console.log("this is truthy");
}

false // false
null // nil
undefined
""
0
NaN

// 11. JS arrow functions () => {}
// Note: they look like a 'very special' variable

const square = (num) => {
  return num * num; // return is mandatory
};

// const square = num => num * num;

console.log(square(12));