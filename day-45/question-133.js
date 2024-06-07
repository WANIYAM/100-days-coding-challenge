/*               QUESTION 133
Write a JavaScript object and convert it into a JSON string.
*/
// Create an object that adheres to the Person interface
var person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
// Convert the object to a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString);
