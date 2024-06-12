/*                            QUESTION 146
Show an example of a callback function used to filter an array of numbers.
*/
// Array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Callback function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}
// Using the filter method with the callback function
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
