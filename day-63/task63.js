// TypeScript file: typescript_types.ts
// Basic Types
var isDone = false;
var age = 30;
var firstName = "John";
var notSure = 4;
console.log(isDone, age, firstName, notSure);
// Union Types
var value;
value = "Hello";
console.log(value); // Output: Hello
value = 42;
console.log(value); // Output: 42
var emp = {
    name: "Jane",
    employeeId: 12345,
};
console.log(emp);
// Literal Types
var direction;
direction = "up";
console.log(direction); // Output: up
// Tuple Types
var person;
person = ["John", 25];
console.log(person); // Output: ["John", 25]
// Enum Types
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log(dir); // Output: 1
dir = Direction.Left;
console.log(dir); // Output: 3
var anotherValue;
anotherValue = "Hello";
console.log(anotherValue); // Output: Hello
anotherValue = 123;
console.log(anotherValue); // Output: 123
