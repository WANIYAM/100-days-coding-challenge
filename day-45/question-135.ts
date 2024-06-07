/*                      QUESTION 135
Explain how you can format a JSON string with proper indentation for readability.
*/

// Define a TypeScript interface for the object
interface Person {
    name: string;
    age: number;
    city: string;
}

// Create an object that adheres to the Person interface
const persoN: Person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Convert the object to a formatted JSON string with 4 spaces of indentation
const JsonString: string = JSON.stringify(persoN, null, 4);

console.log(JsonString);
