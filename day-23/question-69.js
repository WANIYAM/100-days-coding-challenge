/*                           QUESTION 69
Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
 the quotient and the remainder. Use an object to return both values.
*/
function divideAndFindRemainder(dividend, divisor) {
    // Calculate the quotient and remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    // Return an object containing both values
    return { quotient: quotient, remainder: remainder };
}
var Answer = divideAndFindRemainder(17, 5);
console.log(Answer);
