// TypeScript file: typescript_types.ts

// Basic Types
let isDone: boolean = false;
let age: number = 30;
let firstName: string = "John";
let notSure: any = 4;

console.log(isDone, age, firstName, notSure);

// Union Types
let value: string | number;

value = "Hello";
console.log(value); // Output: Hello

value = 42;
console.log(value); // Output: 42

// Intersection Types
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Jane",
  employeeId: 12345,
};

console.log(emp);

// Literal Types
let direction: "up" | "down" | "left" | "right";

direction = "up";
console.log(direction); // Output: up

// Tuple Types
let person: [string, number];

person = ["John", 25];
console.log(person); // Output: ["John", 25]

// Enum Types
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
console.log(dir); // Output: 1

dir = Direction.Left;
console.log(dir); // Output: 3

// Type Aliases
type StringOrNumber = string | number;

let anotherValue: StringOrNumber;

anotherValue = "Hello";
console.log(anotherValue); // Output: Hello

anotherValue = 123;
console.log(anotherValue); // Output: 123
