// Type Annotations With Arrays
// Annotating an array of strings
var fruits = ["apple", "banana", "cherry"];
// Using a loop to process each element in the array
for (var i = 0; i < fruits.length; i++) {
    console.log("Fruit: ".concat(fruits[i].toUpperCase()));
}
// Type Annotations With Multidimensional Arrays
// Array of numbers
var arrayOne = [1, 2, 3, 4, 5];
console.log(arrayOne);
// Array of strings
var arrayTwo = ["A", "B", "C"];
console.log(arrayTwo);
// Array that can hold elements of either type string or number
var arrayThree = [1, 2, 3, 4, "A", "B", "C"];
console.log(arrayThree);
