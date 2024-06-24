// Code Structure
// Semicolons usually terminate statements, but line breaks can also serve as delimiters.
alert('Hello');
alert('World');

// Automatic semicolon insertion can fail in some cases:
alert("There will be an error after this message");

[1, 2].forEach(alert); // Adding a semicolon fixes the error

// Strict Mode
'use strict';
// Enable strict mode at the top of a script or function for modern JavaScript behavior.

function exampleFunction() {
  // No semicolon needed after function declaration
}

// Variables
let x = 5;
x = "John";

const constantValue = 10; // Cannot be changed

// Variable naming
let name1 = "Alice";
let $dollar = "Dollar";
let _underscore = "Underscore";

// Data Types
let number = 42;
let bigIntNumber = 1234567890123456789012345678901234567890n;
let string = "Hello";
let boolean = true;
let nothing = null;
let notAssigned;
let obj = {};
let unique = Symbol("unique");

// Typeof operator
alert(typeof null); // "object" (language error)
alert(typeof function(){}); // "function" (special case)

// Interaction
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert("Visitor: " + userName);
alert("Tea wanted: " + isTeaWanted);

// Operators
alert('1' + 2); // '12', string
alert(1 + '2'); // '12', string

let a = 1;
a *= 2; // Combined assignment

// Conditional operator
let result = (a > 1) ? 'greater' : 'less or equal';

// Logical operators
alert(true && false); // false
alert(true || false); // true
alert(!true); // false

// Nullish coalescing operator
let definedValue = null ?? 'default'; // 'default'

// Comparisons
alert(0 == false); // true
alert(0 === false); // false

// Loops
let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

do {
  alert(i);
  i--;
} while (i > 0);

for (let j = 0; j < 3; j++) {
  alert(j);
}

// Break and continue
for (let k = 0; k < 5; k++) {
  if (k === 2) continue;
  if (k === 4) break;
  alert(k);
}

// Switch construct
let age = prompt('Your age?', 18);
switch (age) {
  case 18:
    alert("Won't work"); // age is a string from prompt
    break;
  case "18":
    alert("This works!");
    break;
  default:
    alert("Any value not equal to one above");
}

// Functions
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sumExpression = function(a, b) {
  return a + b;
};

// Arrow Functions
let sumArrow = (a, b) => a + b;
let sayHi = () => alert("Hello");
let double = n => n * 2;

// Default Parameters
function sumWithDefaults(a = 1, b = 2) {
  return a + b;
}

// Usage of functions
alert(sum(2, 3)); // 5
alert(sumExpression(2, 3)); // 5
alert(sumArrow(2, 3)); // 5
sayHi(); // Alerts "Hello"
alert(double(3)); // 6
alert(sumWithDefaults()); // 3

// Example of function with multiple lines in arrow function
let sumMultiline = (a, b) => {
  let result = a + b;
  return result;
};
alert(sumMultiline(1, 2)); // 3
