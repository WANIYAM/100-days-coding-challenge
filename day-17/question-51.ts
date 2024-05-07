/*                                                  
                                      QUESTION 51
Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
and refactor it into an arrow function.

*/

// Original function
function calculateRectangleArea(width, height) {
    return width * height;
}

// Refactored arrow function
const CalculateRectangleArea = (width, height) => width * height;

// Example usage
console.log(CalculateRectangleArea(5, 10)); // Output: 50
