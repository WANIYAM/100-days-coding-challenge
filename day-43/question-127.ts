/*                           QUESTION 127
Convert a traditional function expression to an arrow function.
*/

// Traditional function expression
function greet(name) {
    return console.log(`Hello, ${name}!`);
    
}

// Converted to arrow function
const Greet = (name) => console.log(`Hello, ${name}!`);  //changing the variable name to reduce error

greet("waniya");
Greet("waniya");