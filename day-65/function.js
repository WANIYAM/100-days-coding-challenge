// TypeScript file demonstrating various function concepts
// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}
console.log(calculateRectangleArea(12, 13));
// Example of calling the calculateRectangleArea function
var long = 5;
var width = 3;
var area = calculateRectangleArea(12, 13);
console.log("The area of the rectangle is: ".concat(area));
// Optional and Default Parameters
// Optional Parameters
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
console.log(greetOptional("waniya", 23));
// Calling greetOptional with different arguments
greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// Default Parameters
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
// Calling greetDefault with different arguments
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("waniya", 23); // Output: "Hello, waniya! You are 30 years old."
// Rest Parameter
// Function with a rest parameter and type annotations
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        result += num;
    }
    return result;
}
// Calling the addAll function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5)); // Output: 170.5
// Arrow Function
// Arrow function to add two numbers
var addWithArrow = function (num1, num2) { return num1 + num2; };
// Calling the addWithArrow function
console.log(addWithArrow(10, 20)); // Output: 30
// Anonymous Function
// Anonymous function to add two numbers
var add = function (num1, num2) {
    return num1 + num2;
};
// Calling the add function
console.log(add(10, 20)); // Output: 30
// void & never Types
// void function example
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
