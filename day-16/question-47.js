/*                           QUESTION 47
Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year,
use array destructuring to assign the first and second laptops to variables. Then, log these variables.
*/
// Array of objects representing different laptops
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2022 },
    { make: "HP", model: "Envy", year: 2023 }
];
// Using array destructuring to assign the first and second laptops to variables
var firstLaptop = laptops[0], secondLaptop = laptops[1];
// Logging the variables
console.log("First Laptop:", firstLaptop);
console.log("Second Laptop:", secondLaptop);
