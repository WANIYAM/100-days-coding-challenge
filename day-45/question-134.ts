/*              QUESTION 134
Take a JSON string and parse it into a JavaScript object.
*/

// Define a TypeScript interface for the object
interface Person {
    name: string;
    age: number;
    city: string;
}

// JSON string
const Jsonstring: string = '{"name":"John Doe","age":30,"city":"New York"}';

// Parse the JSON string into a TypeScript object
const Person: Person = JSON.parse(Jsonstring);

// Output the object properties
console.log(Person.name); 
console.log(Person.age);  
console.log(Person.city); 
