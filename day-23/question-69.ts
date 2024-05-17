/*                           QUESTION 69
Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
 the quotient and the remainder. Use an object to return both values.
*/

function divideAndFindRemainder(dividend: number, divisor: number): { quotient: number, remainder: number } {
    // Calculate the quotient and remainder
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    // Return an object containing both values
    return { quotient, remainder };
}

const Answer = divideAndFindRemainder(17, 5);
console.log(Answer); 
