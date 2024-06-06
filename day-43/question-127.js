/*                           QUESTION 127
Convert a traditional function expression to an arrow function.
*/
// Traditional function expression
function greet(name) {
    return console.log("Hello, ".concat(name, "!"));
}
// Converted to arrow function
var Greet = function (name) { return console.log("Hello, ".concat(name, "!")); }; //changing the variable name to reduce error
greet("waniya");
Greet("waniya");
