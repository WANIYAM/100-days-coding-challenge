/*                                     QUESTION 81
 Iterating Over Object Properties: Write a function that takes an
 object as an argument and
 logs all of its properties and values.
*/
// Define a function that logs all properties and values of an object
function logObjectProperties(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log("".concat(key, ": ").concat(obj[key]));
        }
    }
}
// Example usage with a car object
var CAr = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'red'
};
logObjectProperties(CAr);
