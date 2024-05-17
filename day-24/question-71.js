/*                          QUESTION 71
Compare let and const: Create two examples where let allows
reassignment but const does not. Try to reassign a const-declared variable and catch the error.
*/
var x = 10;
console.log("Initial value of x:", x); // Output: Initial value of x: 10
x = 20; // Reassigning x
console.log("Updated value of x:", x); // Output: Updated value of x: 20
var y = 30;
console.log("Initial value of y:", y); // Output: Initial value of y: 30
try {
    y = 40; // Attempting to reassign y (will throw an error)
    console.log("Updated value of y:", y); // This line will not be executed
}
catch (error) {
    console.error("Error caught while trying to reassign y:", error.message);
}
