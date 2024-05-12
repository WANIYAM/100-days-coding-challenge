/*                              QUESTION 56
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/ 
// Original array with mixed types

let mixedArray: (string | number | boolean)[] = [10, "This is a string", 3.14, true, "array"];

// Create a new array that contains only strings 
let stringArray: string[] = [];
for (let item of mixedArray) {
    if (typeof item === 'string') {
        stringArray.push(item);
    }
}

console.log("Mixed Array:", mixedArray);
console.log("String Array:", stringArray);