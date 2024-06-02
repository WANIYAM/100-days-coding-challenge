/*                      QUESTION 117
Implement a switch statement that evaluates an expression
 and uses the default case if none of the cases match.
*/

// Function to log the type of fruit based on a number (1-3)
function logFruitType(fruit: number): void {
    // Use a switch statement to log the type of fruit
    switch (fruit) {
        case 1:
            console.log("Apple");
            break;
        case 2:
            console.log("Banana");
            break;
        case 3:
            console.log("Orange");
            break;
        // If the number is not between 1 and 3, log an error message
        default:
            console.log("Invalid fruit type.");
    }
}

logFruitType(5);
logFruitType(2);
