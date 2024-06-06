/*                    QUESTION 131
Create two modules; one that exports a class, 
and another that imports the class and
 creates an instance.
*/

// Import the Person class
import { Person } from './person';

// Create an instance of the Person class
const person = new Person('John Doe', 30);

// Call the greet method and log the result
console.log(person.greet()); 
