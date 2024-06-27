// Union Types
var myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
// Literal Types
var direction;
direction = "left"; // Valid assignment
console.log(direction);
// Nullable Types
var username = "Glitcher";
console.log(username);
username = null; // Valid assignment
console.log(username);
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
var myName = "Glitcher";
console.log(myName);
var myValue = 10;
console.log(myValue);
var alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
var person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
    phone: '123-456-7890'
};
console.log(person);
