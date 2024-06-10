/*               QUESTION 140
Explain the error that occurs when trying to use a reserved word as a variable name.
*/

// let let = 10; // SyntaxError: Unexpected token 'let'

// The JavaScript engine will throw a SyntaxError because it expects a valid identifier, not a reserved word.

// To fix the error, simply choose a different, valid identifier for your variable. 
let myVariable = 10; // No error!

