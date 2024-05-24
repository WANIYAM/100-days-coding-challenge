/*                          QUESTION 92
Write a function to remove the last element from an array and return the removed element.
*/
function removeLastElement(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    return arr.pop(); // Remove and return the last element
}
// Example usage:
var fruits = ["apple", "banana", "orange", "strawberry"];
var removedFruit = removeLastElement(fruits);
console.log("Removed fruit:", removedFruit);
console.log("Updated array:", fruits);
