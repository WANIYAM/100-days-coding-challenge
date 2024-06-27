// Type Annotations With Arrays

// Annotating an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}

// Type Annotations With Multidimensional Arrays

// Array of numbers
let arrayOne: number[] = [1, 2, 3, 4, 5];
console.log(arrayOne);

// Array of strings
let arrayTwo: string[] = ["A", "B", "C"];
console.log(arrayTwo);

// Array that can hold elements of either type string or number
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
console.log(arrayThree);
