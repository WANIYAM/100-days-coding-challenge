/*                  QUESTION 132
 Discuss the difference between default and named 
 exports in JavaScript modules
*/

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

import { add, subtract } from './addition,subtraction';
console.log(add(2, 3)); 
console.log(subtract(5, 3)); 

// Summary
/*Default Exports: Single, flexible import name, no curly braces.
Named Exports: Multiple, exact import name, uses curly braces.*/