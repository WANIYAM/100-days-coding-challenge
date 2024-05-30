/*                         QUESTION 107
Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
*/
function isDivisibleBy2And3(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
}

// Example usage
console.log(isDivisibleBy2And3(6));  
console.log(isDivisibleBy2And3(10)); 
console.log(isDivisibleBy2And3(12)); 
console.log(isDivisibleBy2And3(7));  
