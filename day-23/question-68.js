/*                                   QUESTION 68
 Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
  Round the result to two decimal places.
*/
function multiplyAndRound(a, b) {
    // Multiply the two numbers
    var product = a * b;
    // Round the result to two decimal places
    var roundedProduct = Math.round(product * 100) / 100;
    return roundedProduct;
}
var Result = multiplyAndRound(2.345, 7.891);
console.log(Result);
