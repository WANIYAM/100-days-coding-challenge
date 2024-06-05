/*                 QUESTION 125
Modify a method in an object to use the this keyword to access another property in the same object.
*/

// Create an object with a method that uses the this keyword to access another property
const Person = {
    name: "waniya",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

Person.greet();
