// Union Types
let myVar: string | number;

myVar = "Hello"; // Valid assignment
console.log(myVar);

myVar = 42; // Valid assignment
console.log(myVar);

// Literal Types
let direction: "left" | "right" | "up" | "down";
direction = "left"; // Valid assignment
console.log(direction);

// Nullable Types
let username: string | null = "Glitcher";
console.log(username);

username = null; // Valid assignment
console.log(username);

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null);       // Output: Hello, Guest!

// Type Alias
type MyString = string;
let myName: MyString = "Glitcher";
console.log(myName);

type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 10;
console.log(myValue);

type Person = {
  name: string;
  age: number;
  email?: string;
};

const alice: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

const bob: Person = {
  name: "Bob",
  age: 25,
};

console.log(alice);
console.log(bob);

// Intersection Type
type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  address: string;
  phone: string;
};

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
  phone: '123-456-7890'
};

console.log(person);
