"use strict";
/*                  QUESTION 132
 Discuss the difference between default and named exports in JavaScript modules
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*Default Exports:

Single Export: Only one default export per module.
No Curly Braces: Imported without curly braces.
Flexible Naming: Can be imported with any name.*/
// ITS EXAMPLE IS SHOWN IN QUESTION 130
/*  Named Exports:

Multiple Exports: Allows multiple exports from a module.
Curly Braces: Imported using curly braces.
Fixed Naming: Must use the exact export name.

*/
// example of named exports
const addition_subtraction_1 = require("./addition,subtraction");
console.log((0, addition_subtraction_1.add)(2, 3));
console.log((0, addition_subtraction_1.subtract)(5, 3));
// Summary
/*Default Exports: Single, flexible import name, no curly braces.
Named Exports: Multiple, exact import name, uses curly braces.*/ 
