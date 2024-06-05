/*                    QUESTION 124
 Create a function inside an object that returns the object's own name property using the this keyword.
*/
// Create an object with a function that returns the object's own name property
var person = {
    name: "Waniya",
    Name: function () {
        return this.name;
    }
};
// Call the function to get the object's name property
console.log(person.Name());
