/*                          QUESTION 92
Write a function to remove the last element from an array and return the removed element.
*/

function removeLastElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    return arr.pop(); // Remove and return the last element
}

// Example usage:
const fruits: string[] = ["apple", "banana", "orange", "strawberry"];
const removedFruit = removeLastElement(fruits);
console.log("Removed fruit:", removedFruit); 
console.log("Updated array:", fruits);
