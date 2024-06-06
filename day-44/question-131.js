"use strict";
/*                    QUESTION 131
Create two modules; one that exports a class,
and another that imports the class and
 creates an instance.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Person class
const person_1 = require("./person");
// Create an instance of the Person class
const person = new person_1.Person('John Doe', 30);
// Call the greet method and log the result
console.log(person.greet());
