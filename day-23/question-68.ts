/*                                   QUESTION 68
 Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
  Round the result to two decimal places.
*/

function multiplyAndRound(a: number, b: number): number {
    // Multiply the two numbers
    const product = a * b;

    // Round the result to two decimal places
    const roundedProduct = Math.round(product * 100) / 100;

    return roundedProduct;
}

const Result = multiplyAndRound(2.345, 7.891); 
console.log(Result); 
