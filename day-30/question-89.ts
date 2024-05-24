/*                                             QUESTION 89
Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) 
and rounds it to two decimal places.
*/

function roundToTwoDecimals(num: number): number {
    return Number(num.toFixed(2));
}

console.log(roundToTwoDecimals(3.14159)); 
console.log(roundToTwoDecimals(1.005));  
console.log(roundToTwoDecimals(-2.6789));
