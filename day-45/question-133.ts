/*               QUESTION 133          
Write a JavaScript object and convert it into a JSON string.
*/

// Define a TypeScript interface for the object
interface Person {
    name: string;
    age: number;
    city: string;
}

// Create an object that adheres to the Person interface
const person: Person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Convert the object to a JSON string
const jsonString: string = JSON.stringify(person);

console.log(jsonString);
