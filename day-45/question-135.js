/*                      QUESTION 135
Explain how you can format a JSON string with proper indentation for readability.
*/
// Create an object that adheres to the Person interface
var persoN = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
// Convert the object to a formatted JSON string with 4 spaces of indentation
var JsonString = JSON.stringify(persoN, null, 4);
console.log(JsonString);
